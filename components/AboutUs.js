import { useTranslation } from 'next-i18next';

const AboutUs = () => {
  const { t } = useTranslation('common');
  return (
    <div className="about-us" style={{ height: '90vh',padding: '20px' }}>
      <h2 style={{ color: 'blue' }}>{t('aboutUs.title')}</h2>
      <div className="about-us-content" style={{height: '100%'}}>
        <div className="description">
          <p>{t('aboutUs.welcomeMessage')}</p>
          <p>{t('aboutUs.missionStatement')}</p>
        </div>
        <div className="video">
          <iframe 
            width="560" 
            height="415" 
            src="https://www.youtube.com/watch?v=THYvJgllb-o" 
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
