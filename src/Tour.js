import React, { useRef, useState } from 'react';
import { EllipsisOutlined, UploadOutlined, SaveOutlined } from '@ant-design/icons';
import { Button, Divider, Space, Tour } from 'antd';

const Tours = () => {
  const refUpload = useRef(null);
  const refSave = useRef(null);
  const refMoreActions = useRef(null);
  const [openTour, setOpenTour] = useState(false);

  const steps = [
    {
      title: 'Upload Photo',
      description: 'Click here to upload your photo to Instagram.',
      target: () => refUpload.current,
    },
    {
      title: 'Save',
      description: 'Save your changes after uploading.',
      target: () => refSave.current,
    },
    {
      title: 'More Actions',
      description: 'Explore additional actions here.',
      target: () => refMoreActions.current,
    },
  ];

  return (
    <>
      <Button type="primary" onClick={() => setOpenTour(true)}>
        Begin Instagram Tour
      </Button>

      <Divider />

      <Space>
        <Button ref={refUpload} icon={<UploadOutlined />}>
          Upload
        </Button>
        <Button ref={refSave} type="primary" icon={<SaveOutlined />}>
          Save
        </Button>
        <Button ref={refMoreActions} icon={<EllipsisOutlined />} />
      </Space>

      <Tour open={openTour} onClose={() => setOpenTour(false)} steps={steps} />
    </>
  );
};

export default Tours;
