import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const NewsArticle = () => {
  const router = useRouter();
  const { id } = router.query;
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      
      try {
        const response = await fetch(`/api/articles/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch article');
        }
        const data = await response.json();
        setArticle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return <Layout><div className="text-center py-8">Loading article...</div></Layout>;
  }

  if (error) {
    return <Layout><div className="text-center py-8 text-red-500">Error: {error}</div></Layout>;
  }

  if (!article) {
    return <Layout><div className="text-center py-8">Article not found</div></Layout>;
  }

  return (
    <Layout>
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-semibold text-blue-600 mb-4">{article.title}</h1>
          <p className="text-gray-500 mb-4">{new Date(article.createdAt).toLocaleDateString()}</p>
          {article.imageUrl && (
            <img 
              src={`${article.imageUrl}`} 
              alt={article.title} 
              className="w-full h-96 object-cover mb-8 rounded-lg"
            />
          )}
          <div className="w-full overflow-wrap break-words text-lg word-break-break-word px-4">
            {article.content}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsArticle;
