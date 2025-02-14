import { Card, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import BarComponent from './BarComponent';
import { useEffect, useState } from 'react';

const { Meta } = Card;
const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [select, setSelect] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setNewsData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading articles...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-blue-600">Latest News and Updates</h1>
        <p className="text-xl text-gray-600">Stay up-to-date with our latest projects and initiatives.</p>
      </div>

      {/* Main News Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">All News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.slice(0, select).map(news => (
            <Card 
              key={news.id}
              hoverable
              cover={<img alt="example" src={news.image ? `/uploads/${news.image}` : '/default-news.jpg'} />}
              className="shadow-lg rounded-lg"
            >
              <Meta title={news.title} description={`${news.date} | ${news.description}`} />
              <Button href={`/news/${news.id}`} className="mt-4" type="primary">Read More</Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Pagination (if necessary) */}
      {newsData.length > select && (
        <div className="text-center">
          <Button type="primary" onClick={() => setSelect(select + 3)}>Load More</Button>
        </div>
      )}
    </section>
  );
};

export default NewsPage;
