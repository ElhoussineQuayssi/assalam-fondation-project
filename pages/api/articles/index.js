import { store } from "../../../lib/store"
import multer from "multer"
import path from "path"

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
  if (req.method === "GET") {
    const articles = store.getArticles()
    res.status(200).json(articles)
  } else if (req.method === "POST") {
    upload.single("image")(req, res, (err) => {
      if (err) {
        return res.status(500).json({ error: "Error uploading file" })
      }
      const { title, content, tags } = req.body
      const imageName = req.file ? req.file.filename : null
      const newArticle = store.addArticle({
        title,
        content,
        image: imageName,
        tags: tags.split(",").map((tag) => tag.trim()),
      })
      res.status(201).json(newArticle)
    })
  } else {
    res.setHeader("Allow", ["GET", "POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

