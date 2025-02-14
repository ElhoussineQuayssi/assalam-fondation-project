import { Typography, Card } from "antd"

const { Title, Paragraph } = Typography

export default function About() {
  return (
    <div id="about" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          About Fataer Al Baraka
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Purpose
            </Title>
            <Paragraph className="text-green-800">
              Fataer Al Baraka is a training center dedicated to teaching Moroccan pastry and cake production, serving
              as a springboard towards autonomy and personal fulfillment for women in precarious situations.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Approach
            </Title>
            <Paragraph className="text-green-800">
              We honor Moroccan culinary tradition by enabling women to transform their passion for pastry into a real
              life opportunity, particularly widows and vulnerable women.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Impact
            </Title>
            <Paragraph className="text-green-800">
              Through our program, we fight against precariousness by offering women concrete professional opportunities
              and strengthening the spirit of solidarity within local communities.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )
}

