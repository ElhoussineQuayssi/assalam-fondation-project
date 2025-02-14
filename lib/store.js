const articles = []
let nextId = 1

export const store = {
  getArticles: () => articles,
  getArticle: (id) => articles.find((article) => article.id === id),
  addArticle: (article) => {
    const newArticle = { ...article, id: nextId++ }
    articles.push(newArticle)
    return newArticle
  },
  updateArticle: (id, updatedArticle) => {
    const index = articles.findIndex((article) => article.id === id)
    if (index !== -1) {
      articles[index] = { ...articles[index], ...updatedArticle, id }
      return articles[index]
    }
    return null
  },
  deleteArticle: (id) => {
    const index = articles.findIndex((article) => article.id === id)
    if (index !== -1) {
      articles.splice(index, 1)
      return true
    }
    return false
  },
}

