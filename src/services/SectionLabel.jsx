import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const SectionLabel = ({ sectionId }) => {
  const { t } = useTranslation();
  
  const labels = {
    'hero': '',
    'sobre-mim-02': t('sticky_about'),
    'jornada': t('sticky_trajectory'),
    'skills': t('sticky_hard_skills'),
    'service-details': t('sticky_certificates'),
    'portfolio': t('sticky_projects'),
    'form-section': t('sticky_contact')
  };

  const label = labels[sectionId];
  
  if (!label) return null;

  return (
    <div className="section-sticky-label">
      <span>{label}</span>
    </div>
  );
};

export default SectionLabel;