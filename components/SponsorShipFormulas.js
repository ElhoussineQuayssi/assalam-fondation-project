import { Typography, Card, Row, Col } from "antd"

const { Title, Paragraph } = Typography

const formulas = [
  { title: "Global Sponsorship", description: "Covers basic needs and occasional needs" },
  { title: "Basic Sponsorship", description: "Covers the orphan's basic needs (food, education, and health)" },
  { title: "School Sponsorship", description: "Sponsor can choose for the orphan to attend a private primary school" },
  { title: "Family Sponsorship", description: "Covers the basic needs of an orphan family (2 or more)" },
  { title: "Occasional Sponsorship", description: "Contribute to specific projects or occasions" },
]

export default function SponsorshipFormulas() {
  return (
    <div id="formulas" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          Sponsorship Formulas
        </Title>
        <Row gutter={[16, 16]}>
          {formulas.map((formula, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card className="h-full shadow-lg">
                <Title level={4} className="text-lg font-semibold text-green-600 mb-2">
                  {formula.title}
                </Title>
                <Paragraph className="text-green-800">{formula.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

