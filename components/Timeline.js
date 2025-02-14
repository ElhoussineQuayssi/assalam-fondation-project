import { Typography, Timeline } from "antd"

const { Title } = Typography

const projects = [
  { name: "Back to School", date: "September" },
  { name: "Ramadan Basket", date: "Ramadan" },
  { name: "Summer Camps", date: "July-August" },
  { name: "Eid Al Fitr Joy", date: "Eid Al Fitr" },
  { name: "Eid Al Adha Joy", date: "Eid Al Adha" },
]

export default function ProjectTimeline() {
  return (
    <div id="projects" className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <Title level={2} className="text-3xl font-bold text-blue-600 mb-10 text-center">
          Annual Project Timeline
        </Title>
        <Timeline mode="alternate">
          {projects.map((project, index) => (
            <Timeline.Item key={index} color={index % 2 === 0 ? "green" : "blue"}>
              <Title
                level={4}
                className={`text-lg font-semibold ${index % 2 === 0 ? "text-green-600" : "text-blue-600"}`}
              >
                {project.name}
              </Title>
              <p className={index % 2 === 0 ? "text-green-800" : "text-blue-800"}>{project.date}</p>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </div>
  )
}

