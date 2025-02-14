import { Typography, List } from "antd"

const { Title, Paragraph } = Typography

const objectives = [
  "Develop personal capacities and skills of women and girls victims of all forms of violence, as well as women and children in difficult situations",
  "Ensure reception, listening, guidance, counseling, support, family mediation, and psycho-social support services",
  "Allow women and girls victims of violence, as well as children in difficult situations, to express the difficulties they encounter",
  "Offer individual and group consultations with trainers and specialists in psychological support, social support, personal development, family and legal counseling",
  "Provide vocational training to develop personal and technical skills of women and children in difficult situations",
  "Raise awareness and inform women and girls victims of violence about their rights and strengthen their personal and technical skills",
  "Help diagnose problems, follow protection and treatment procedures, reduce violence, and find legal solutions",
  "Facilitate socio-economic reintegration and repair individual and collective damages",
  "Participate in the work of local committees to combat violence",
  "Strengthen the personal capacities of training participants",
  "Provide women and children with skills to overcome difficulties",
]

export default function Objectives() {
  return (
    <div id="objectives" className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Our Objectives
        </Title>
        <Paragraph className="text-lg text-blue-800 mb-6 text-center">
          Centre Himaya aims to achieve the following objectives:
        </Paragraph>
        <List
          dataSource={objectives}
          renderItem={(item) => (
            <List.Item className="text-blue-700">
              <List.Item.Meta
                avatar={<div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>}
                description={item}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

