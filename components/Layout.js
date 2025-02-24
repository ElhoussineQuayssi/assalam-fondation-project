import { Layout, Menu, Row, Col, Space, Typography, Dropdown } from 'antd';
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
          <Menu.Item key="2">
            <Dropdown
              menu={{
                items: [
                  {
                    key: '1',
                    label: <a href="/projects/Kafala">Kafala</a>,
                  },
                  {
                    key: '2',
                    label: <a href="/projects/NadiAssalam">Nadi Assalam</a>,
                  },
                  {
                    key: '3',
                    label: <a href="/projects/RayhanatAssalam">Rayhanat Assalam</a>,
                  },
                  {
                    key: '4',
                    label: <a href="/projects/Imtiaz">Imtiaz</a>,
                  },
                  {
                    key: '5',
                    label: <a href="/projects/centerHimaya">Centre Himaya</a>,
                  },
                  {
                    key: '6',
                    label: <a href="/projects/FataerAlBaraka">Fataer AlBaraka</a>,
                  },
                ],
              }}
              placement="bottom"
            >
              <a href="/projects" style={{ color: "blue", fontWeight: 'bold' }}>Projects</a>
            </Dropdown>
          </Menu.Item>
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
        <Row gutter={[16, 32]} className='px-32 pb-8 w-full justify-center'>
          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ fontSize: '20px' }}>Links</Title>
            <Space direction="vertical">
              <a href="/about" style={{ fontSize: '15px' }}>About Us</a>
              <a href="/projects" style={{ fontSize: '15px' }}>Projects</a>
              <a href="/news" style={{ fontSize: '15px' }}>News</a>
              <a href="/contact" style={{ fontSize: '15px' }}>Contact</a>
            </Space>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Title level={4} style={{ fontSize: '20px' }}>Infos</Title>
            <p style={{ fontSize: '15px',marginBottom:'10px' }}><b>Address:</b> 22nd, 2nd Floor, Building 83, Hassan II Street, Rabat, Morocco</p>
            <p style={{ fontSize: '15px',marginBottom:'10px' }}><b>Phone:</b> 0537-70-23-46</p>
            <p style={{ fontSize: '15px' }}><b>Email:</b> bn.assalam@gmail.com</p>
          </Col>
          <Col xs={24} sm={24} md={8} style={{ textAlign: 'center' }}>
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

        <div style={{ margin: '10px 30px 0px 30px' , backgroundColor: 'lightgreen', color: 'green',display: 'flex', justifyContent: 'space-around',padding:'5px 6px', alignItems: 'center', flexDirection: 'row'}}>
          <p >© {new Date().getFullYear()} Fondation Assalam. All rights reserved.</p>
          <p  className='hidden md:block'>Created by Quayssi</p> {/* Additional text */}
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
