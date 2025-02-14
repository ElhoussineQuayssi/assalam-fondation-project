import { Typography, Card, Row, Col } from "antd"

const { Title, Paragraph } = Typography

export default function TargetAudience() {
  return (
    <div id="target" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          Our Target Audience
        </Title>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card className="h-full shadow-lg text-center">
              <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
                Age Group
              </Title>
              <Paragraph className="text-green-800 text-lg">Children aged 4 to 5 years</Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card className="h-full shadow-lg text-center">
              <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
                Educational Stage
              </Title>
              <Paragraph className="text-green-800 text-lg">Children in the preschool phase</Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

