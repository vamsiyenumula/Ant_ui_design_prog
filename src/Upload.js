import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

const photoProps = {
  name: 'photo',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  accept: 'image/*',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} photo uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} photo upload failed.`);
    }
  },
};

const pdfProps = {
  name: 'pdf',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  accept: '.pdf',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} PDF uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} PDF upload failed.`);
    }
  },
};

const anyFileProps = {
  name: 'anyFile',
  action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const Uploads = () => (
  <div style={{ display: 'flex', gap: '16px' }}>
    <Upload {...photoProps}>
      <Button icon={<UploadOutlined />}>Upload Photo</Button>
    </Upload>

    <Upload {...pdfProps}>
      <Button icon={<UploadOutlined />}>Upload PDF</Button>
    </Upload>

    <Upload {...anyFileProps}>
      <Button icon={<UploadOutlined />}>Upload Any File</Button>
    </Upload>
  </div>
);

export default Uploads;
