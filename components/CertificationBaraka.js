import { Typography, Card } from "antd"

const { Title, Paragraph } = Typography

export default function Certification() {
  return (
    <div className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Certification and Recognition
        </Title>
        <Card className="shadow-lg">
          <Paragraph className="text-blue-800 text-lg">
            At the end of the training, an exam organized and supervised in partnership with the National Mutual Aid
            allows participants to obtain a certified and officially recognized diploma. This diploma is a true passport
            to employment and autonomy.
          </Paragraph>
        </Card>
      </div>
    </div>
  )
}

