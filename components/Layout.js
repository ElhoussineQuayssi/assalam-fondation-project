import { Layout, Menu, Row, Col, Space, Typography } from 'antd';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, LinkedinOutlined } from '@ant-design/icons'; // Import social media icons
const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App = ({ children, id }) => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around', // Center the content
          theme: 'light',
          backgroundColor: 'lightblue',
          padding: '0 20px',
          height: '100px',
          width: '100%',
        }}
      >
        <img src="./logo.png" alt="Logo" style={{ height: '80px', marginRight: '16px' }} /> {/* Logo in header */}
        <Menu
          theme="light"
          mode="horizontal"
          style={{
            flex: 'none', // Prevent it from taking full width
            backgroundColor: 'lightblue',
            color: 'green',
            width: '30%',
          }}
        >
          <Menu.Item key="1"><a href="/aboutus" style={{ color: "blue" , fontWeight: 'bold' }}>About Us</a></Menu.Item>
          <Menu.Item key="2"><a href="/projects" style={{ color: "blue" , fontWeight: 'bold' }}>Projects</a></Menu.Item>
          <Menu.Item key="3"><a href="/news" style={{ color: "blue" , fontWeight: 'bold' }}>News</a></Menu.Item>
          <Menu.Item key="4"><a href="/contact" style={{ color: "blue" , fontWeight: 'bold' }}>Contact</a></Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 ',
        }}
      >
        <div
          style={{
            background: '',
            minHeight: 280,
            padding: 0,
            borderRadius: '8px',
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: 'lightblue', // Light background
          padding: '20px 0',
          borderTop: '1px solid #d9d9d9', // Border for the copyright bar
        }}
      >
        <img src='./logo.png' alt="Logo" style={{ height: '60px', display: 'block', margin: '40px auto' }} /> {/* Logo in footer */}
        <Row justify="space-between" align="top">
          <Col span={8}>
            <Title level={4} style={{ fontSize: '20px' }}>Links</Title>
            <Space direction="vertical">
              <a href="/about" style={{ fontSize: '18px' }}>About Us</a>
              <a href="/projects" style={{ fontSize: '18px' }}>Projects</a>
              <a href="/news" style={{ fontSize: '18px' }}>News</a>
              <a href="/contact" style={{ fontSize: '18px' }}>Contact</a>
            </Space>
          </Col>
          <Col span={8}>
            <Title level={4} style={{ fontSize: '20px' }}>Infos</Title>
            <p style={{ fontSize: '18px' }}>Address: [Your address]</p>
            <p style={{ fontSize: '18px' }}>Phone: [Your phone number]</p>
            <p style={{ fontSize: '18px' }}>Email: [Your email]</p>
          </Col>
          <Col span={8}>
            <Title level={4} style={{ fontSize: '20px' }}>Social Media</Title>
            <Space size="large">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FacebookOutlined style={{ fontSize: '24px', color: '#3b5998' }} /> {/* Facebook blue */}
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramOutlined style={{ fontSize: '24px', color: '#c32aa3' }} /> {/* Instagram purple */}
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <YoutubeOutlined style={{ fontSize: '24px', color: '#ff0000' }} /> {/* YouTube red */}
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <LinkedinOutlined style={{ fontSize: '24px', color: '#0077b5' }} /> {/* LinkedIn blue */}
              </a>
            </Space>
          </Col>
        </Row>
        <div style={{ margin: '20px 30px' , backgroundColor: 'lightgreen', color: 'green',display: 'flex', justifyContent: 'space-around',padding:'5px 6px', alignItems: 'center', flexDirection: 'row'}}>
          <p style={{ fontSize: '18px' }}>© {new Date().getFullYear()} Fondation Assalam. All rights reserved.</p>
          <p style={{ fontSize: '16px' }}>Created by Quayssi</p> {/* Additional text */}
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
