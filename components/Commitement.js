import { Typography, Timeline } from "antd"

const { Title, Paragraph } = Typography

const commitments = [
  "Information and guidance meetings for Baccalaureate candidates",
  "Annual training plan on different axes of the wheel of life",
  "Monthly scholarship to meet students' minimal needs",
  "Support for access to housing in case of major problems",
  "Computer equipment according to availability",
  "Coaching or psychological support by a professional",
  "Language proficiency support",
  "Assistance in finding internships and jobs",
  "Leadership reinforcement",
]

export default function Commitment() {
  return (
    <div id="commitment" className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Our Commitment
        </Title>
        <Paragraph className="text-lg text-blue-800 mb-6 text-center">
          We are committed to supporting our students through various actions:
        </Paragraph>
        <Timeline mode="alternate">
          {commitments.map((commitment, index) => (
            <Timeline.Item key={index} color={index % 2 === 0 ? "blue" : "green"}>
              <Paragraph className="text-blue-700">{commitment}</Paragraph>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  )
}

