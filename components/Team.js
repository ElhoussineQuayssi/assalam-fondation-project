import { Typography, Card, Avatar } from "antd"

const { Title, Paragraph } = Typography

const teamMembers = [
  { role: "Coordinator", avatar: "/placeholder.svg" },
  { role: "Social Workers", avatar: "/placeholder.svg" },
  { role: "Lawyer", avatar: "/placeholder.svg" },
  { role: "Family Counseling Specialists", avatar: "/placeholder.svg" },
  { role: "Psychologists", avatar: "/placeholder.svg" },
  { role: "Personal Development Trainers", avatar: "/placeholder.svg" },
]

export default function Team() {
  return (
    <div className="py-20 bg-green-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-green-600 mb-10 text-center">
          Our Team
        </Title>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center shadow-lg">
              <Avatar size={64} src={member.avatar} className="mb-4" />
              <Paragraph className="text-green-800 font-semibold">{member.role}</Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

