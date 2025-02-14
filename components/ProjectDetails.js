import { Tabs } from 'antd';

const { TabPane } = Tabs;

const projectDetailsData = [
  {
    key: "1",
    tab: "Well Drilling",
    objective: "Break the barrier of inaccessibility to drinking water...",
    items: [
      "In-depth geological studies to locate water tables",
      "Construction of wells with modern pumping systems",
      "Training locals for maintenance"
    ]
  },
  {
    key: "2",
    tab: "Building Schools",
    objective: "Provide quality education in rural areas...",
    items: [
      "Modern elementary schools with teaching materials",
      "Programs to raise awareness and encourage enrollment"
    ]
  },
  {
    key: "3",
    tab: "Mosque Construction",
    objective: "Create spaces for community and spiritual gathering...",
    items: [
      "Sustainable mosques adapted to local conditions",
      "Integration of educational spaces"
    ]
  },
  {
    key: "4",
    tab: "Pilot Project",
    objective: "An innovative self-sufficient village model...",
    items: [
      "Essential infrastructure: sewage system and roads",
      "Educational and vocational centers",
      "Community farms for food security"
    ]
  },
  {
    key: "5",
    tab: "Humanitarian Caravans",
    objective: "Immediate support during critical times...",
    items: [
      "Clothing, food, and blankets distribution",
      "Educational and recreational activities for children"
    ]
  },
  {
    key: "6",
    tab: "Medical Caravans",
    objective: "Provide medical care in underserved areas...",
    items: [
      "General and specialized consultations",
      "Free distribution of medicines",
      "Health awareness campaigns"
    ]
  }
];

const ProjectDetails = () => {
  return (
    <section className="p-12" >
      <Tabs defaultActiveKey="1" >
        {projectDetailsData.map(project => (
          <TabPane tab={<span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>{project.tab}</span>} key={project.key}>
            <p className='text-xl py-10'>Objective: {project.objective}</p>
            <ul className="list-disc p-5 flex flex-row justify-around gap-3">
              {project.items.map((item, index) => (
                <span key={index} className='text-md p-4 flex-wrap bg-green-200 rounded-lg '>{item}</span>
              ))}
            </ul>
          </TabPane>
        ))}
      </Tabs>
    </section>
  );
};

export default ProjectDetails;
