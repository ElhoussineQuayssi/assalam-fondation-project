// components/ContactForm.js
import { Form, Input, Button } from "antd";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Contact Us</h2>
      <Form layout="vertical">
        <Form.Item label="Name" name="name" required>
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item label="Email" name="email" required>
          <Input type="email" placeholder="Your Email" />
        </Form.Item>
        <Form.Item label="Subject" name="subject" required>
          <Input placeholder="Subject" />
        </Form.Item>
        <Form.Item label="Message" name="message" required>
          <Input.TextArea placeholder="Your Message" rows={6} />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="w-full">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
