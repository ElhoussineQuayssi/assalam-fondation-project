import { Typography, Card, Row, Col } from "antd"

const { Title, Paragraph } = Typography

const programAreas = [
  { title: "Moroccan Pastry Techniques", description: "Basic and advanced techniques of Moroccan pastry" },
  { title: "Cake Production", description: "Skills for producing various Moroccan cakes" },
  { title: "Management Skills", description: "Basic business management skills" },
  { title: "Entrepreneurship", description: "Skills to develop individual or collective projects" },
]

export default function TrainingProgram() {
  return (
    <div id="program" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          Our Training Program
        </Title>
        <Paragraph className="text-lg text-green-800 mb-6 text-center">Our 9-month program covers:</Paragraph>
        <Row gutter={[16, 16]}>
          {programAreas.map((area, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card className="h-full shadow-lg">
                <Title level={4} className="text-lg font-semibold text-green-600 mb-2">
                  {area.title}
                </Title>
                <Paragraph className="text-green-800">{area.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

