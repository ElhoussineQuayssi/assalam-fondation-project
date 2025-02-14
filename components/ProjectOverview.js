import { Card } from 'antd';
import Link from 'next/link';

const ProjectOverview = () => {
  return (
    <section className="p-12 bg-blue-200">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card title="Water Projects" cover={<img src="/path-to-image.jpg" alt="" />} >
          <p>Improving access to clean water in rural areas...</p>
        </Card>
        <Card title="Education Initiatives" cover={<img src="/path-to-image.jpg" alt="Education projects" />} >
          <p>Building schools to provide education for all children...</p>
        </Card>
        <Card title="Health Care" cover={<img src="/path-to-image.jpg" alt="Health projects" />} >
          <p>Delivering medical support to underserved communities...</p>
        </Card>
      </div>
    </section>
  );
};

export default ProjectOverview;
