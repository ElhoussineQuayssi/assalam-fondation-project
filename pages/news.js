import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import News from '../components/News';

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState([]);



  return (
    <Layout>
      <News items={newsItems} />
    </Layout>
  );
};

export default NewsPage;
