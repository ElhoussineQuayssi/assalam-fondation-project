import { Typography, Card } from "antd"

const { Title, Paragraph } = Typography

export default function About() {
  return (
    <div id="about" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          About Imtiaz Project
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Mission
            </Title>
            <Paragraph className="text-green-800">
              To support and empower brilliant students from disadvantaged backgrounds, guiding them towards academic
              excellence and professional success.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Vision
            </Title>
            <Paragraph className="text-green-800">
              To create a generation of leaders who are academically excellent, morally upright, and socially
              responsible.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Values
            </Title>
            <Paragraph className="text-green-800">
              Excellence, Integrity, Empowerment, Social Responsibility, and Continuous Learning.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )
}

