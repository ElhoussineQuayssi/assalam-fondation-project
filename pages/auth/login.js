"use client"

import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Form, Input, Button, message } from "antd"

export default function LoginPage() {
  const router = useRouter()

  const onFinish = async (values) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: values.username,
      password: values.password
    })

    if (result?.error) {
      message.error("Invalid credentials")
    } else {
      router.push("/admin")
    }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>Admin Login</h1>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
