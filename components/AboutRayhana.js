import { Typography, Card } from "antd"

const { Title, Paragraph } = Typography

export default function About() {
  return (
    <div id="about" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          About Rihana As-Salam
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Foundation
            </Title>
            <Paragraph className="text-green-800">
              Inaugurated in 2013 in partnership with the Regional Directorate of Anfa at El Bachiri School, affiliated
              with the As-Salam Foundation for Social Development, Casablanca-Anfa section.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Approach
            </Title>
            <Paragraph className="text-green-800">
              We focus on developing children's social, cognitive, and emotional skills through directed activities and
              play in a safe and inspiring educational environment.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Capacity
            </Title>
            <Paragraph className="text-green-800">
              The preschool has two equipped rooms to welcome children, providing a comfortable and stimulating learning
              environment for our young learners.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )
}

