import { Typography, Card } from "antd"

const { Title, Paragraph } = Typography

export default function About() {
  return (
    <div id="about" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          About Centre Himaya
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Foundation
            </Title>
            <Paragraph className="text-green-800">
              Centre Himaya is part of the Al Salam Foundation for Social Development, with 36 sections spread across
              several cities in the Kingdom of Morocco.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Approach
            </Title>
            <Paragraph className="text-green-800">
              We distinguish ourselves by our caring approach towards women and children in difficult situations,
              striving to overcome all obstacles that may hinder the socio-economic empowerment of women and children.
            </Paragraph>
          </Card>
          <Card className="shadow-lg">
            <Title level={3} className="text-xl font-semibold text-green-600 mb-4">
              Our Achievement
            </Title>
            <Paragraph className="text-green-800">
              Our journey has been crowned by the opening of a multidisciplinary support center for women and children
              in difficult situations, in partnership with the Ministry of Women and Social Solidarity and the
              Provincial Directorate of Casablanca Anfa.
            </Paragraph>
          </Card>
        </div>
      </div>
    </div>
  )
}

