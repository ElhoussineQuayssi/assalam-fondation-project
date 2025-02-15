import { Typography, Card, Row, Col } from "antd"
import { useTranslation } from 'next-i18next'

const { Title, Paragraph } = Typography

export default function Activities() {
  const { t } = useTranslation('common');
  
  const activities = [
    {
      category: t('activitiesRayhana.educationalTitle'),
      items: [
        t('activitiesRayhana.educationalItem1'),
        t('activitiesRayhana.educationalItem2'),
        t('activitiesRayhana.educationalItem3'),
      ],
    },
    {
      category: t('activitiesRayhana.physicalTitle'),
      items: [
        t('activitiesRayhana.physicalItem1'),
        t('activitiesRayhana.physicalItem2'),
      ],
    },
    {
      category: t('activitiesRayhana.socialTitle'),
      items: [
        t('activitiesRayhana.socialItem1'),
        t('activitiesRayhana.socialItem2'),
        t('activitiesRayhana.socialItem3'),
      ],
    },
    {
      category: t('activitiesRayhana.creativeTitle'),
      items: [
        t('activitiesRayhana.creativeItem1'),
        t('activitiesRayhana.creativeItem2'),
        t('activitiesRayhana.creativeItem3'),
      ],
    },
  ]

  return (
    <div id="activities" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-6 00 mb-10 text-center">
          {t('activitiesRayhana.title')}
        </Title>
        <Row gutter={[16, 16]}>
          {activities.map((activity, index) => (
            <Col xs={24} md={12} key={index}>
              <Card className="h-full shadow-lg">
                <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
                  {activity.category}
                </Title>
                <ul className="list-disc pl-5">
                  {activity.items.map((item, idx) => (
                    <li key={idx} className="text-green-800 mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}
