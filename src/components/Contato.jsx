import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import SectionLabel from '../services/SectionLabel';

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  phone: '',
  message: ''
};

const initialFieldErrors = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState(initialFormData);
  const [fieldErrors, setFieldErrors] = useState(initialFieldErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const notificationTimeoutRef = useRef(null);

  const requiredFields = ['name', 'email', 'subject', 'message'];

  const validateField = (name, value) => {
    const normalizedValue = String(value || '').trim();

    switch (name) {
      case 'name':
        return normalizedValue ? '' : 'Nome é obrigatório';

      case 'email':
        if (!normalizedValue) {
          return 'Email é obrigatório';
        }

        return emailRegex.test(normalizedValue)
          ? ''
          : 'Email inválido';

      case 'subject':
        return normalizedValue ? '' : 'Assunto é obrigatório';

      case 'message':
        return normalizedValue ? '' : 'Mensagem é obrigatória';

      default:
        return '';
    }
  };

  const isFormValid = requiredFields.every(
    (field) => !validateField(field, formData[field])
  );

  const clearResponse = () => {
    setResponseMessage('');
    setResponseType('');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

    setFieldErrors((previous) => ({
      ...previous,
      [name]: previous[name] ? validateField(name, value) : ''
    }));

    if (responseMessage) {
      clearResponse();
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setFieldErrors((previous) => ({
      ...previous,
      [name]: validateField(name, value)
    }));
  };

  const formatPhone = (input) => {
    const digits = input.replace(/\D/g, '').slice(0, 11);

    if (!digits) {
      return '';
    }

    if (digits.length <= 2) {
      return `(${digits}`;
    }

    if (digits.length <= 6) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    if (digits.length <= 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const handlePhoneInput = (event) => {
    const formattedPhone = formatPhone(event.target.value);

    setFormData((previous) => ({
      ...previous,
      phone: formattedPhone
    }));

    if (responseMessage) {
      clearResponse();
    }
  };

  const validateForm = () => {
    const errors = { ...initialFieldErrors };

    requiredFields.forEach((field) => {
      errors[field] = validateField(field, formData[field]);
    });

    setFieldErrors(errors);

    return requiredFields.every((field) => !errors[field]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!validateForm()) {
      setResponseMessage('Por favor, corrija os erros no formulário.');
      setResponseType('error');
      return;
    }

    setIsSubmitting(true);
    clearResponse();

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário');
      }

      setResponseMessage('Mensagem enviada com sucesso! Obrigado.');
      setResponseType('success');
      setFormData({ ...initialFormData });
      setFieldErrors({ ...initialFieldErrors });
    } catch (error) {
      setResponseMessage(
        'Ocorreu um erro ao enviar sua mensagem. Tente novamente ou entre em contato diretamente.'
      );
      setResponseType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('matheus.abib.ma@gmail.com');

      setShowNotification(true);

      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }

      notificationTimeoutRef.current = setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    } catch (error) {
      window.location.href = 'mailto:matheus.abib.ma@gmail.com';
    }
  };

  useEffect(() => {
    return () => {
      if (notificationTimeoutRef.current) {
        clearTimeout(notificationTimeoutRef.current);
      }
    };
  }, []);

  const contactLinks = [
    {
      id: 'whatsapp',
      icon: 'bi bi-whatsapp',
      label: 'WhatsApp',
      value: '(11) 97507-2008',
      href: 'https://wa.me/11975072008'
    },
    {
      id: 'email',
      icon: 'bi bi-envelope',
      label: 'Email',
      value: 'matheus.abib.ma@gmail.com',
      action: copyEmail
    },
    {
      id: 'linkedin',
      icon: 'bi bi-linkedin',
      label: 'LinkedIn',
      value: '/in/matheusabib',
      href: 'https://www.linkedin.com/in/matheusabib/'
    },
    {
      id: 'github',
      icon: 'bi bi-github',
      label: 'GitHub',
      value: '/MatheusAbib',
      href: 'https://github.com/MatheusAbib'
    }
  ];

  const renderContactLink = (contact) => {
    const content = (
      <>
        <span className="contact-link-icon">
          <i className={contact.icon} aria-hidden="true"></i>
        </span>

        <span className="contact-link-content">
          <span className="contact-link-label">
            {contact.label}
          </span>

          <strong className="contact-link-value">
            {contact.value}
          </strong>
        </span>

        <span className="contact-link-arrow">
          <i
            className={
              contact.action
                ? 'bi bi-copy'
                : 'bi bi-arrow-up-right'
            }
            aria-hidden="true"
          ></i>
        </span>
      </>
    );

    if (contact.action) {
      return (
        <button
          key={contact.id}
          type="button"
          className="contact-link"
          onClick={contact.action}
          aria-label="Copiar endereço de email"
        >
          {content}
        </button>
      );
    }

    return (
      <a
        key={contact.id}
        href={contact.href}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        {content}
      </a>
    );
  };

  const renderFieldError = (field) => {
    if (!fieldErrors[field]) {
      return null;
    }

    return (
      <span
        id={`${field}-error`}
        className="field-error"
        role="alert"
      >
        <i
          className="bi bi-exclamation-circle"
          aria-hidden="true"
        ></i>

        {fieldErrors[field]}
      </span>
    );
  };

  return (
    <section
      id="form-section"
      className="contact-section section" data-aos="fade-up"
    >
      <div className="container">
        <SectionLabel sectionId="form-section" />

        <div className="section-title" data-aos="fade-up">
          <h2 data-translate="contact_form_title">
            {t('contact_form_title')}
          </h2>
        </div>

        <div
          className="contact-wrapper"
          data-aos-delay="100"
        >
          <aside className="contact-info">
            <div className="contact-info-header">
              <div className="contact-info-icon">
                <i
                  className="bi bi-chat-dots"
                  aria-hidden="true"
                ></i>
              </div>

              <h3 data-translate="contact_info_title">
                {t('contact_info_title')}
              </h3>

              <p data-translate="contact_info_text">
                {t('contact_info_text')}
              </p>
            </div>

            <div className="contact-info-links">
              {contactLinks.map(renderContactLink)}
            </div>
          </aside>

          <div className="contact-form-container">
            <form
              id="emailForm"
              className="contact-form"
              name="contact"
              method="POST"
              onSubmit={handleSubmit}
              data-netlify="true"
              netlify-honeypot="bot-field"
              noValidate
            >
              <input
                type="hidden"
                name="form-name"
                value="contact"
              />

              <p className="d-none">
                <label>
                  Não preencha este campo se for humano:
                  <input name="bot-field" />
                </label>
              </p>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">
                    <span data-translate="form_name">
                      {t('form_name')}
                    </span>

                    <span className="required">*</span>
                  </label>

                  <div className="input-wrapper">
                    <i
                      className="input-icon bi bi-person"
                      aria-hidden="true"
                    ></i>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`form-input ${fieldErrors.name ? 'error' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t('form_placeholder_name')}
                      autoComplete="name"
                      aria-invalid={Boolean(fieldErrors.name)}
                      aria-describedby={
                        fieldErrors.name ? 'name-error' : undefined
                      }
                      required
                    />
                  </div>

                  {renderFieldError('name')}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <span data-translate="form_email">
                      {t('form_email')}
                    </span>

                    <span className="required">*</span>
                  </label>

                  <div className="input-wrapper">
                    <i
                      className="input-icon bi bi-envelope"
                      aria-hidden="true"
                    ></i>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${fieldErrors.email ? 'error' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t('form_placeholder_email')}
                      autoComplete="email"
                      aria-invalid={Boolean(fieldErrors.email)}
                      aria-describedby={
                        fieldErrors.email ? 'email-error' : undefined
                      }
                      required
                    />
                  </div>

                  {renderFieldError('email')}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">
                    <span data-translate="form_subject">
                      {t('form_subject')}
                    </span>

                    <span className="required">*</span>
                  </label>

                  <div className="input-wrapper">
                    <i
                      className="input-icon bi bi-tag"
                      aria-hidden="true"
                    ></i>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className={`form-input ${fieldErrors.subject ? 'error' : ''}`}
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder={t('form_placeholder_subject')}
                      aria-invalid={Boolean(fieldErrors.subject)}
                      aria-describedby={
                        fieldErrors.subject ? 'subject-error' : undefined
                      }
                      required
                    />
                  </div>

                  {renderFieldError('subject')}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <span data-translate="form_phone">
                      {t('form_phone')}
                    </span>
                  </label>

                  <div className="input-wrapper">
                    <i
                      className="input-icon bi bi-telephone"
                      aria-hidden="true"
                    ></i>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-input"
                      value={formData.phone}
                      onChange={handlePhoneInput}
                      placeholder={t('form_placeholder_phone')}
                      autoComplete="tel"
                      inputMode="tel"
                      maxLength={15}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">
                  <span data-translate="form_message">
                    {t('form_message')}
                  </span>

                  <span className="required">*</span>
                </label>

                <div className="input-wrapper">
                  <i
                    className="input-icon bi bi-chat-left-text"
                    aria-hidden="true"
                  ></i>

                  <textarea
                    id="message"
                    name="message"
                    className={`form-input ${fieldErrors.message ? 'error' : ''}`}
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={t('form_placeholder_message')}
                    aria-invalid={Boolean(fieldErrors.message)}
                    aria-describedby={
                      fieldErrors.message ? 'message-error' : undefined
                    }
                    required
                  ></textarea>
                </div>

                {renderFieldError('message')}
              </div>

              <button
                type="submit"
                className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting || !isFormValid}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner"
                      aria-hidden="true"
                    ></span>

                    <span data-translate="form_loading">
                      {t('form_loading')}
                    </span>
                  </>
                ) : (
                  <>
                    <span data-translate="form_submit">
                      {t('form_submit')}
                    </span>

                    <i
                      className="bi bi-send"
                      aria-hidden="true"
                    ></i>
                  </>
                )}
              </button>

              {responseMessage && (
                <div
                  className={`form-response ${responseType}`}
                  role={responseType === 'error' ? 'alert' : 'status'}
                  aria-live={responseType === 'error' ? 'assertive' : 'polite'}
                >
                  <span className="form-response-icon">
                    <i
                      className={
                        responseType === 'success'
                          ? 'bi bi-check-circle'
                          : 'bi bi-exclamation-circle'
                      }
                      aria-hidden="true"
                    ></i>
                  </span>

                  <span className="form-response-text">
                    {responseMessage}
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {showNotification && (
        <div
          className="email-notification show"
          role="status"
          aria-live="polite"
        >
          <i
            className="bi bi-check-circle-fill"
            aria-hidden="true"
          ></i>

          <span data-translate="email_copied">
            {t('email_copied')}
          </span>
        </div>
      )}
    </section>
  );
};

export default ContactForm;