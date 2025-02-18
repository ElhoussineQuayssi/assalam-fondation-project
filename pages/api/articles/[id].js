import Article from '../../../lib/models/Article';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        const article = await Article.findByPk(id);
        if (!article) {
          return res.status(404).json({ message: 'Article not found' });
        }
        return res.status(200).json(article);

      case 'PUT':
        const [updated] = await Article.update(req.body, {
          where: { id }
        });
        if (!updated) {
          return res.status(404).json({ message: 'Article not found' });
        }
        const updatedArticle = await Article.findByPk(id);
        return res.status(200).json(updatedArticle);

      case 'DELETE':
        const deleted = await Article.destroy({
          where: { id }
        });
        if (!deleted) {
          return res.status(404).json({ message: 'Article not found' });
        }
        return res.status(204).end();

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
