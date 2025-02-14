import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { t } = useTranslation('common');

  const changeLanguage = (locale) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>{t('languages.en')}</button>
      <button onClick={() => changeLanguage('fr')}>{t('languages.fr')}</button>
      <button onClick={() => changeLanguage('ar')}>{t('languages.ar')}</button>
    </div>
  );
};

export default LanguageSwitcher;
