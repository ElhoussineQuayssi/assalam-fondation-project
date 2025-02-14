import connectDB from "../../../lib/mongodb"
import Article from "../../../models/Article"
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

export default async function handler(req, res) {
  await connectDB()
  const { id } = req.query

  try {
    if (req.method === "GET") {
      const article = await Article.findById(id)
      if (article) {
        res.status(200).json(article)
      } else {
        res.status(404).json({ error: "Article not found" })
      }
    } else if (req.method === "PUT") {
      upload.single("image")(req, res, async (err) => {
        if (err) {
          return res.status(500).json({ error: "Error uploading file" })
        }
        const { title, content, tags } = req.body
        const imageName = req.file ? req.file.filename : undefined
        
        const updateData = {
          title,
          content,
          tags: tags.split(",").map((tag) => tag.trim()),
          updatedAt: new Date()
        }
        
        if (imageName) {
          // Delete old image if exists
          const existingArticle = await Article.findById(id)
          if (existingArticle?.imageUrl) {
            const oldImagePath = path.join(process.cwd(), "public", existingArticle.imageUrl.replace("/uploads/", ""))
            fs.unlinkSync(oldImagePath)
          }
          updateData.imageUrl = `/uploads/${imageName}`
        }

        const updatedArticle = await Article.findByIdAndUpdate(
          id,
          updateData,
          { new: true }
        )
        
        if (updatedArticle) {
          res.status(200).json(updatedArticle)
        } else {
          res.status(404).json({ error: "Article not found" })
        }
      })
    } else if (req.method === "DELETE") {
      const article = await Article.findByIdAndDelete(id)
      if (article) {
        // Delete associated image if exists
        if (article.imageUrl) {
          const imagePath = path.join(process.cwd(), "public", article.imageUrl.replace("/uploads/", ""))
          fs.unlinkSync(imagePath)
        }
        res.status(200).json({ message: "Article deleted successfully" })
      } else {
        res.status(404).json({ error: "Article not found" })
      }
    } else {
      res.setHeader("Allow", ["GET", "PUT", "DELETE"])
      res.status(405).end(`Method ${req.method} Not Allowed`)
    }
  } catch (error) {
    console.error("Error in article handler:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
