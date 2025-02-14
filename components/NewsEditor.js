import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Button, message } from 'antd';
import { Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

const NewsEditor = ({ visible, onCreate, onCancel, newsItem }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (newsItem) {
      form.setFieldsValue(newsItem);
      if (newsItem.image) {
        setFileList([{
          uid: '-1',
          name: 'current-image',
          status: 'done',
          url: newsItem.image
        }]);
      }
    }
  }, [newsItem, form]);

  const onFinish = async (values) => {
    try {
      const formData = new FormData();
      formData.append('title', values.title);
      formData.append('content', values.content);
      formData.append('tags', values.tags);
      
      if (values.image && values.image.fileList.length > 0) {
        formData.append('image', values.image.fileList[0].originFileObj);
      }

      const apiUrl = '/api/articles';
      const method = newsItem ? 'PUT' : 'POST';
      
      if (newsItem) {
        formData.append('id', newsItem.id);
      }

      const { data } = await axios({
        method,
        url: apiUrl,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });


      message.success(newsItem ? 'Article updated successfully!' : 'Article created successfully!');
      onCreate(data);
      form.resetFields();
      setFileList([]);
    } catch (error) {
      console.error('Error saving article:', error);
      message.error('Failed to save article. Please try again.');
    }
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    return isImage;
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  return (
    <Modal
      visible={visible}
      title={newsItem ? 'Edit News Item' : 'Create News Item'}
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={form.submit}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="title" label="Title" rules={[{ required: true, message: 'Please enter the title!' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="image" label="Image" rules={[{ required: true, message: 'Please upload an image!' }]}>
          <Upload
            name="image"
            listType="picture-card"
            beforeUpload={(file) => {
              const isImage = file.type.startsWith('image/');
              if (!isImage) {
                message.error('You can only upload image files!');
              }
              return isImage || Upload.LIST_IGNORE;
            }}
            maxCount={1}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
          >

            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item name="tags" label="Tags" rules={[{ required: true, message: 'Please enter the tags!' }]}>
          <Input placeholder="Enter tags separated by commas" />
        </Form.Item>

        <Form.Item name="content" label="Content" rules={[{ required: true, message: 'Please enter the content!' }]}>
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewsEditor;
