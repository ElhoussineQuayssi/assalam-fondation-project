import { Typography, Card } from "antd"

const { Title, Paragraph } = Typography

export default function About() {
  return (
    <div id="about" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          About Nadi Assalam
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Purpose
            </Title>
            <Paragraph className="text-green-800">
              Nadi Assalam is a training center dedicated to teaching traditional and modern sewing, designed to give
              hope and opportunities to widows and women in precarious situations.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Approach
            </Title>
            <Paragraph className="text-green-800">
              We offer more than just training: we enable these women to reinvent themselves, regain economic autonomy,
              and become actors of their own future.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Impact
            </Title>
            <Paragraph className="text-green-800">
              Through our program, we fight against precariousness by offering women concrete income opportunities and
              strengthening solidarity within communities.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )
}

