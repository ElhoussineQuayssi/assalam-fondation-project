import { Typography, Card, Row, Col } from "antd"
import { useTranslation } from 'react-i18next'

const { Title, Paragraph } = Typography

const opportunities = [
  { titleKey: "afterTraining.opportunities.cooperatives.title", descriptionKey: "afterTraining.opportunities.cooperatives.description" },
  {
    titleKey: "afterTraining.opportunities.homeProjects.title", 
    descriptionKey: "afterTraining.opportunities.homeProjects.description",
  },
]

export default function AfterTraining() {
  const { t } = useTranslation()
  return (
    <div className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          {t('afterTraining.title')}
        </Title>
        <Paragraph className="text-lg text-green-800 mb-6 text-center">
          {t('afterTraining.description')}
        </Paragraph>
        <Row gutter={[16, 16]} justify="center">
          {opportunities.map((opportunity, index) => (
            <Col xs={24} md={12} key={index}>
              <Card className="h-full shadow-lg">
                <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
                  {t(opportunity.titleKey)}
                </Title>
                <Paragraph className="text-green-800">{t(opportunity.descriptionKey)}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
