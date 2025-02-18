"use client"

import { useState, useEffect } from "react"
import { Table, Button, Modal, Form, Input, Upload, message, Dropdown, Menu } from "antd"
import { PlusOutlined, EditOutlined, DeleteOutlined, ShareAltOutlined } from "@ant-design/icons"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function AdminDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    router.push("/auth/login")
    return null
  }
  const [articles, setArticles] = useState([])
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const [editingArticle, setEditingArticle] = useState(null)
  const [fileList, setFileList] = useState([])

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      const response = await fetch("/api/articles")
      if (!response.ok) throw new Error("Failed to fetch articles")
      const data = await response.json()
      setArticles(data)
    } catch (error) {
      message.error("Failed to fetch articles: " + error.message)
    }
  }

  const showModal = (article = null) => {
    setEditingArticle(article)
    setIsModalVisible(true)
    setFileList([])
    if (article) {
      form.setFieldsValue({
        title: article.title,
        content: article.content,
        tags: article.tags.join(", "),
      })
    } else {
      form.resetFields()
    }
  }

  const handleOk = () => {
    form.submit()
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setEditingArticle(null)
    setFileList([])
  }

  const onFinish = async (values) => {
    const formData = new FormData()
    formData.append("title", values.title)
    formData.append("content", values.content)
    formData.append("tags", values.tags)
    if (fileList.length > 0) {
      formData.append("image", fileList[0].originFileObj)
    }

    try {
      let response
      if (editingArticle) {
        response = await fetch(`/api/articles/${editingArticle.id}`, {
          method: "PUT",
          body: formData,
        })
      } else {
        response = await fetch("/api/articles", {
          method: "POST",
          body: formData,
        })
      }

      if (!response.ok) throw new Error("Failed to save article")

      message.success(`Article ${editingArticle ? "updated" : "added"} successfully`)
      setIsModalVisible(false)
      fetchArticles()
    } catch (error) {
      message.error("Error saving article: " + error.message)
    }
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
      })
      if (!response.ok) throw new Error("Failed to delete article")
      message.success("Article deleted successfully")
      fetchArticles()
    } catch (error) {
      message.error("Error deleting article: " + error.message)
    }
  }

  const handleShare = (platform, article) => {
    const articleUrl = `${window.location.origin}/articles/${article.id}`
    const title = encodeURIComponent(article.title)
    const content = encodeURIComponent(article.content.substring(0, 300) + "...") // Truncate content to 300 characters
    const imageUrl = article.image ? encodeURIComponent(`${window.location.origin}/uploads/${article.image}`) : ""

    let url = ""
    let shareText = ""

    switch (platform) {
      case "facebook":
        url = `https://www.facebook.com/dialog/share?app_id=YOUR_FACEBOOK_APP_ID&display=popup&href=${encodeURIComponent(articleUrl)}&quote=${title}`
        break
      case "twitter":
        shareText = `${title}\n\n${content}\n\n${articleUrl}`
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`
        break
      case "linkedin":
        url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(articleUrl)}&title=${title}&summary=${content}&source=${encodeURIComponent(window.location.origin)}`
        break
      case "copy":
        shareText = `${article.title}\n\n${article.content}\n\n${articleUrl}`
        navigator.clipboard.writeText(shareText)
        message.success("Article details copied to clipboard!")
        return
      default:
        return
    }

    window.open(url, "_blank", "width=600,height=400")
  }

  const shareMenu = (article) => (
    <Menu>
      <Menu.Item key="1" onClick={() => handleShare("facebook", article)}>
        Share on Facebook
      </Menu.Item>
      <Menu.Item key="2" onClick={() => handleShare("twitter", article)}>
        Share on Twitter
      </Menu.Item>
      <Menu.Item key="3" onClick={() => handleShare("linkedin", article)}>
        Share on LinkedIn
      </Menu.Item>
      <Menu.Item key="4" onClick={() => handleShare("copy", article)}>
        Copy to Clipboard
      </Menu.Item>
    </Menu>
  )

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) =>
        image ? (
          <img src={`/uploads/${image}`} alt="Article" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
        ) : (
          "No image"
        ),
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => tags.join(", "),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <>
          <Button icon={<EditOutlined />} onClick={() => showModal(record)} />
          <Button icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} danger />
          <Dropdown overlay={shareMenu(record)} placement="bottomRight">
            <Button icon={<ShareAltOutlined />} />
          </Dropdown>
        </>
      ),
    },
  ]

  const handleFileChange = ({ fileList }) => setFileList(fileList)

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Admin Dashboard</h1>
        <Button type="primary" danger onClick={() => signOut()}>
          Logout
        </Button>
      </div>
      <Button icon={<PlusOutlined />} onClick={() => showModal()} style={{ marginBottom: "20px" }}>
        Add Article
      </Button>
      <Table columns={columns} dataSource={articles} rowKey="id" />
      <Modal
        title={editingArticle ? "Edit Article" : "Add Article"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="content" label="Content" rules={[{ required: true }]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="tags" label="Tags" rules={[{ required: true }]}>
            <Input placeholder="Separate tags with commas" />
          </Form.Item>
          <Form.Item name="image" label="Image">
            <Upload beforeUpload={() => false} onChange={handleFileChange} fileList={fileList} maxCount={1}>
              <Button icon={<PlusOutlined />}>Select Image</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
