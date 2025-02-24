import { prisma } from '../../../lib/store';

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case 'GET':
        const articles = await prisma.article.findMany();
        return res.status(200).json(articles);

      case 'POST':
        const newArticle = await prisma.article.create({
          data: req.body
        });
        return res.status(201).json(newArticle);

      default:
        return res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
