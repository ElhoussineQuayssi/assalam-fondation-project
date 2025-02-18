import Article from '../../../lib/models/Article';

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        const articles = await Article.findAll();
        return res.status(200).json(articles);

      case 'POST':
        const newArticle = await Article.create(req.body);
        return res.status(201).json(newArticle);

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
