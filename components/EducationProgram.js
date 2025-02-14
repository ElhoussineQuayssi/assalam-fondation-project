import { Typography, Card, Row, Col } from "antd"

const { Title, Paragraph } = Typography

const programAreas = [
  { title: "Basic Skills", description: "Reading, writing, and arithmetic" },
  { title: "Recreational Activities", description: "Drawing, music, and theater" },
  { title: "Language Development", description: "Enhancing linguistic skills" },
  { title: "Social Skills", description: "Promoting cooperation and teamwork" },
  { title: "Emotional Growth", description: "Developing emotional intelligence" },
  { title: "Creativity", description: "Stimulating artistic sensitivity through hands-on activities" },
]

export default function EducationalProgram() {
  return (
    <div id="program" className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Our Educational Program
        </Title>
        <Paragraph className="text-lg text-blue-800 mb-6 text-center">
          Our program is based on approved pedagogical methods, focusing on developing core competencies:
        </Paragraph>
        <Row gutter={[16, 16]}>
          {programAreas.map((area, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card className="h-full shadow-lg">
                <Title level={4} className="text-lg font-semibold text-blue-600 mb-2">
                  {area.title}
                </Title>
                <Paragraph className="text-blue-800">{area.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

