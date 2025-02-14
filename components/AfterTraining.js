import { Typography, Card, Row, Col } from "antd"

const { Title, Paragraph } = Typography

const opportunities = [
  { title: "Cooperatives", description: "Group together to produce and sell artisanal and modern creations" },
  {
    title: "Home-based Projects",
    description: "Launch their own projects from home, offering tailored sewing services to their community",
  },
]

export default function AfterTraining() {
  return (
    <div className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          After Training: A Springboard to Autonomy
        </Title>
        <Paragraph className="text-lg text-green-800 mb-6 text-center">
          With diploma in hand, women trained by Nadi Assalam can:
        </Paragraph>
        <Row gutter={[16, 16]} justify="center">
          {opportunities.map((opportunity, index) => (
            <Col xs={24} md={12} key={index}>
              <Card className="h-full shadow-lg">
                <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
                  {opportunity.title}
                </Title>
                <Paragraph className="text-green-800">{opportunity.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

