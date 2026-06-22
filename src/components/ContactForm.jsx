import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from './SectionLabel';


const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('');
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Nome é obrigatório';
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email inválido';
        }
        break;
      case 'subject':
        if (!value.trim()) error = 'Assunto é obrigatório';
        break;
      case 'message':
        if (!value.trim()) error = 'Mensagem é obrigatória';
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (fieldErrors[name]) {
      const error = validateField(name, value);
      setFieldErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
    
    checkFormValidity({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFieldErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const checkFormValidity = (data) => {
    const requiredFields = ['name', 'email', 'subject', 'message'];
    const isValid = requiredFields.every(field => {
      const value = data[field];
      if (!value || !value.trim()) return false;
      
      if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) {
        return false;
      }
      
      return true;
    });
    setIsFormValid(isValid);
  };

  const handlePhoneInput = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    
    if (value.length > 11) value = value.substring(0, 11);
    
    if (value.length > 10) {
      value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    } else if (value.length > 6) {
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
    } else if (value.length > 0) {
      value = value.replace(/^(\d*)/, '($1');
    }
    
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const validateForm = () => {
    const errors = {};
    let hasErrors = false;
    
    Object.keys(fieldErrors).forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        errors[field] = error;
        hasErrors = true;
      }
    });
    
    setFieldErrors(errors);
    return !hasErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setResponseMessage('Por favor, corrija os erros no formulário.');
      setResponseType('error');
      return;
    }
    
    setIsSubmitting(true);
    setResponseMessage('');
    setResponseType('');
    
    const minLoadingTime = new Promise(resolve => setTimeout(resolve, 1500));
    
    try {
      const [_, response] = await Promise.all([
        minLoadingTime,
        fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            'form-name': 'contact',
            ...formData
          }).toString()
        })
      ]);
      
      if (response.ok) {
        setResponseMessage('Mensagem enviada com sucesso! Obrigado.');
        setResponseType('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          phone: '',
          message: ''
        });
        setFieldErrors({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setIsFormValid(false);
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      setResponseMessage('Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente.');
      setResponseType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="form-section" className="contact-section section">
      <div className="section-glow"></div>
      <div className="section-waves"></div>
      <div className="section-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <SectionLabel sectionId="form-section" />
        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="contact_form_title">{t('contact_form_title')}</h2>
        </div>
      </div>

      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info" data-aos="fade-right">
            <div className="contact-info-header">
              <div className="contact-info-icon">
                <i className="bi bi-chat-dots-fill"></i>
              </div>
              <h3 data-translate="contact_info_title">{t('contact_info_title')}</h3>
              <p data-translate="contact_info_text">{t('contact_info_text')}</p>
            </div>
            <div className="contact-info-links">
              <a href="https://wa.me/11975072008" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="bi bi-whatsapp"></i>
                <div>
                  <span>WhatsApp</span>
                  <strong>(11) 97507-2008</strong>
                </div>
              </a>
              <a href="mailto:matheus.abib.ma@gmail.com" className="contact-link">
                <i className="bi bi-envelope-fill"></i>
                <div>
                  <span>Email</span>
                  <strong>matheus.abib.ma@gmail.com</strong>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/matheusabib/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="bi bi-linkedin"></i>
                <div>
                  <span>LinkedIn</span>
                  <strong>/in/matheusabib</strong>
                </div>
              </a>
              <a href="https://github.com/MatheusAbib" target="_blank" rel="noopener noreferrer" className="contact-link">
                <i className="bi bi-github"></i>
                <div>
                  <span>GitHub</span>
                  <strong>/MatheusAbib</strong>
                </div>
              </a>
            </div>
          </div>

          <div className="contact-form-container" data-aos="fade-left">
            <form 
              id="emailForm" 
              className="contact-form"
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
              netlify
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="d-none">
                <label>Não preencha este campo se for humano: <input name="bot-field" /></label>
              </p>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <span data-translate="form_name">{t('form_name')}</span>
                    <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <i className="input-icon bi bi-person-fill"></i>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input ${fieldErrors.name ? 'error' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t('form_placeholder_name')}
                    />
                  </div>
                  {fieldErrors.name && (
                    <div className="field-error">
                      <i className="bi bi-exclamation-triangle-fill"></i>
                      {fieldErrors.name}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <span data-translate="form_email">{t('form_email')}</span>
                    <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <i className="input-icon bi bi-envelope-fill"></i>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${fieldErrors.email ? 'error' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t('form_placeholder_email')}
                    />
                  </div>
                  {fieldErrors.email && (
                    <div className="field-error">
                      <i className="bi bi-exclamation-triangle-fill"></i>
                      {fieldErrors.email}
                    </div>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">
                    <span data-translate="form_subject">{t('form_subject')}</span>
                    <span className="required">*</span>
                  </label>
                  <div className="input-wrapper">
                    <i className="input-icon bi bi-tag-fill"></i>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className={`form-input ${fieldErrors.subject ? 'error' : ''}`}
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t('form_placeholder_subject')}
                    />
                  </div>
                  {fieldErrors.subject && (
                    <div className="field-error">
                      <i className="bi bi-exclamation-triangle-fill"></i>
                      {fieldErrors.subject}
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <span data-translate="form_phone">{t('form_phone')}</span>
                  </label>
                  <div className="input-wrapper">
                    <i className="input-icon bi bi-telephone-fill"></i>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handlePhoneInput}
                      placeholder={t('form_placeholder_phone')}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">
                  <span data-translate="form_message">{t('form_message')}</span>
                  <span className="required">*</span>
                </label>
                <div className="input-wrapper">
                  <i className="input-icon bi bi-chat-dots-fill"></i>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-input ${fieldErrors.message ? 'error' : ''}`}
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t('form_placeholder_message')}
                  ></textarea>
                </div>
                {fieldErrors.message && (
                  <div className="field-error">
                    <i className="bi bi-exclamation-triangle-fill"></i>
                    {fieldErrors.message}
                  </div>
                )}
              </div>

              {responseMessage && (
                <div className={`form-response ${responseType}`}>
                  {responseMessage}
                </div>
              )}

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting || !isFormValid}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    <span data-translate="form_loading">{t('form_loading')}</span>
                  </>
                ) : (
                  <>
                    <span data-translate="form_submit">{t('form_submit')}</span>
                    <i className="bi bi-send-fill"></i>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;