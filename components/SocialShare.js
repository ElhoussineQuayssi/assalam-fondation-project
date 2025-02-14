import { Button, Tooltip } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const SocialShare = () => (
  <div className="flex justify-start space-x-4">
    <Tooltip title="Share on Facebook">
      <Button icon={<FacebookOutlined />} shape="circle" size="large" />
    </Tooltip>
    <Tooltip title="Share on Twitter">
      <Button icon={<TwitterOutlined />} shape="circle" size="large" />
    </Tooltip>
    <Tooltip title="Share on LinkedIn">
      <Button icon={<LinkedinOutlined />} shape="circle" size="large" />
    </Tooltip>
  </div>
);

export default SocialShare;
