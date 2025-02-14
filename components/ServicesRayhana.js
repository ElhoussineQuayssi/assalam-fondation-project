import { Typography, Card, Row, Col } from "antd"

const { Title, Paragraph } = Typography

const services = [
  { title: "Reception", description: "Continuous reception service from 9:00 AM to 4:30 PM" },
  {
    title: "Listening",
    description: "Daily listening sessions for women and girls to express their problems and expectations",
  },
  { title: "Psychological Support", description: "Weekly psychological support sessions adapted to each situation" },
  {
    title: "Legal Consultations",
    description: "Bi-monthly legal consultations and awareness workshops on women's and girls' rights",
  },
  {
    title: "Personal Development",
    description: "Training sessions focused on personal development and daily life challenges",
  },
  { title: "Social Support", description: "Social assistance for families living in precarious conditions" },
  { title: "Education Support", description: "Non-formal education classes to combat school dropout" },
  {
    title: "Medical Caravans",
    description: "Organization of medical caravans for early detection of various health issues",
  },
]

export default function Services() {
  return (
    <div id="services" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          Our Services
        </Title>
        <Row gutter={[16, 16]}>
          {services.map((service, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card className="h-full shadow-lg">
                <Title level={4} className="text-lg font-semibold text-green-600 mb-2">
                  {service.title}
                </Title>
                <Paragraph className="text-green-800">{service.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

