import React from 'react';
import Layout from '../components/Layout';
import Projects from '../components/Projects';
import ImtiazProjectPage from './projects/Imtiaz'; // Import the Imtiaz project page
import Story from '@/components/Story';
import ProjectOverview from '@/components/ProjectOverview';
import ProjectDetails from '@/components/ProjectDetails';
import ImpactSection from '@/components/ImpactSection';
import PartnersSection from '@/components/Partners';
import CallToAction from '@/components/CallToAction';

const ProjectsPage = () => {
  return (
    <Layout id={2}>
      <Story/>
      <Projects/>
      <ProjectOverview/>
      <ProjectDetails/>
      <ImpactSection/>
      <PartnersSection/>
    </Layout>
  );
};

export default ProjectsPage;
