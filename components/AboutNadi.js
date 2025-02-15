import { Typography, Card } from "antd"
import { useTranslation } from 'next-i18next'

const { Title, Paragraph } = Typography

export default function About() {
  const { t } = useTranslation('common');
  return (
    <div id="about" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          {t('aboutNadi.title')}
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              {t('aboutNadi.purposeTitle')}
            </Title>
            <Paragraph className="text-green-800">
              {t('aboutNadi.purposeText')}
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              {t('aboutNadi.approachTitle')}
            </Title>
            <Paragraph className="text-green-800">
              {t('aboutNadi.approachText')}
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              {t('aboutNadi.impactTitle')}
            </Title>
            <Paragraph className="text-green-800">
              {t('aboutNadi.impactText')}
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )
}
