import { Typography, Card } from "antd"

const { Title, Paragraph } = Typography

export default function ProjectOverview() {
  return (
    <div id="overview" className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          Project Overview
        </Title>
        <Card className="shadow-lg">
          <Paragraph className="text-green-800 text-lg">
            Several studies conducted by national and international organizations have shown that some children in our
            country are exposed to deviation, delinquency, vagrancy, or even crime. In the majority of cases, among the
            main direct or indirect causes, we find poverty or orphanhood in the first place.
          </Paragraph>
          <Paragraph className="text-green-800 text-lg mt-4">
            Our project aims to provide comprehensive assistance to orphans and allow them to flourish in their natural
            environment - their family. This includes social, educational, psychological, and medical support.
          </Paragraph>
        </Card>
      </div>
    </div>
  )
}

