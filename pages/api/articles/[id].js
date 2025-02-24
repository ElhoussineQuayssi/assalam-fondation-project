import { prisma } from '../../../lib/store';

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    switch (req.method) {
      case 'GET':
        const article = await prisma.article.findUnique({
          where: { id: Number(id) }
        });
        if (!article) {
          return res.status(404).json({ message: 'Article not found' });
        }
        return res.status(200).json(article);

      case 'PUT':
        const updatedArticle = await prisma.article.update({
          where: { id: Number(id) },
          data: req.body
        });
        return res.status(200).json(updatedArticle);

      case 'DELETE':
        await prisma.article.delete({
          where: { id: Number(id) }
        });
        return res.status(204).end();

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
