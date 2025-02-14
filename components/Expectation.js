import { Typography, Card, Row, Col } from "antd"

const { Title, Paragraph } = Typography

const expectations = [
  {
    title: "Information and Guidance",
    description: "Provide information and orientation for future high school graduates",
  },
  { title: "Quality Education", description: "Access to quality training institutions" },
  { title: "Financial Support", description: "Provide financial support to meet students' needs" },
  {
    title: "Career Guidance",
    description: "Offer support and advice for option choices and integration into professional life",
  },
  { title: "Success Opportunities", description: "Increase chances of success in professional life" },
  { title: "Personal Development", description: "Provide coaching and personal development sessions" },
]

export default function Expectations() {
  return (
    <div id="expectations" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          Student Expectations
        </Title>
        <Row gutter={[16, 16]}>
          {expectations.map((expectation, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card className="h-full shadow-lg">
                <Title level={4} className="text-lg font-semibold text-green-600 mb-2">
                  {expectation.title}
                </Title>
                <Paragraph className="text-green-800">{expectation.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

