import { Typography, Card, Avatar } from "antd"

const { Title, Paragraph } = Typography

const teamMembers = [
  { role: "Preschool Teacher", count: 2, avatar: "/placeholder.svg" },
  { role: "Teaching Assistant", count: 1, avatar: "/placeholder.svg" },
]

export default function Team() {
  return (
    <div className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Our Educational Team
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center shadow-lg">
              <Avatar size={64} src={member.avatar} className="mb-4" />
              <Title level={4} className="text-lg font-semibold text-blue-600 mb-2">
                {member.role}
              </Title>
              <Paragraph className="text-blue-800">
                {member.count} {member.count > 1 ? "members" : "member"}
              </Paragraph>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

