import { Typography, Card, Row, Col } from "antd"

const { Title, Paragraph } = Typography

const projects = [
  {
    title: "Back to School",
    description: "Distribution of school bags to orphans, encouraging education and fighting against school dropout.",
  },
  {
    title: "Ramadan Basket",
    description:
      "Providing basic food items to families during the holy month of Ramadan, supporting our social service mission.",
  },
  {
    title: "Summer Camps",
    description:
      "Organizing summer camps for orphans and underprivileged children in collaboration with specialized associations.",
  },
  {
    title: "Eid Al Fitr Joy",
    description:
      "Offering new clothes and shoes to orphans and children from needy families for Eid El Fitr, bringing joy and equality.",
  },
  {
    title: "Eid Al Adha Joy",
    description:
      "Providing assistance to acquire the Eid lamb for needy families, celebrating the spirit of generosity and solidarity.",
  },
]

export default function ProjectDescriptions() {
  return (
    <div className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          Project Descriptions
        </Title>
        <Row gutter={[16, 16]}>
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card className="h-full shadow-lg">
                <Title level={4} className="text-lg font-semibold text-green-600 mb-2">
                  {project.title}
                </Title>
                <Paragraph className="text-green-800">{project.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

