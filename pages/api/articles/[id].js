import { store } from "../../../lib/store"
import multer from "multer"
import path from "path"
import fs from "fs"

export const config = {
  api: {
    bodyParser: false,
  },
}

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9)
      cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname))
    },
  }),
})

export default function handler(req, res) {
  const { id } = req.query
  const articleId = Number.parseInt(id)

  if (req.method === "GET") {
    const article = store.getArticle(articleId)
    if (article) {
      res.status(200).json(article)
    } else {
      res.status(404).json({ error: "Article not found" })
    }
  } else if (req.method === "PUT") {
    upload.single("image")(req, res, (err) => {
      if (err) {
        return res.status(500).json({ error: "Error uploading file" })
      }
      const { title, content, tags } = req.body
      const imageName = req.file ? req.file.filename : undefined
      const updatedArticle = store.updateArticle(articleId, {
        title,
        content,
        ...(imageName && { image: imageName }),
        tags: tags.split(",").map((tag) => tag.trim()),
      })
      if (updatedArticle) {
        res.status(200).json(updatedArticle)
      } else {
        res.status(404).json({ error: "Article not found" })
      }
    })
  } else if (req.method === "DELETE") {
    const article = store.getArticle(articleId)
    if (article && article.image) {
      const imagePath = path.join(process.cwd(), "public", "uploads", article.image)
      fs.unlinkSync(imagePath)
    }
    const deleted = store.deleteArticle(articleId)
    if (deleted) {
      res.status(200).json({ message: "Article deleted successfully" })
    } else {
      res.status(404).json({ error: "Article not found" })
    }
  } else {
    res.setHeader("Allow", ["GET", "PUT", "DELETE"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

