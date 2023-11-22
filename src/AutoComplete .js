import React, { useState } from 'react';
import { AutoComplete } from 'antd';

const mockEmail = (username, domain) => ({
  value: `${username}@${domain}`,
});

const Autocomp = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const getEmailOptions = (username) => {
    const emailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com'];
    return emailDomains.map((domain) => mockEmail(username, domain));
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
    setOptions(getEmailOptions(data));
  };

  return (
    <>
    <h1>This is a Sample for autocomplete with suggested mails like gamil and email </h1>
      <AutoComplete
        options={options}
        style={{
          width: 500,
        }}
        onSelect={onSelect}
        onSearch={(text) => setOptions(getEmailOptions(text))}
        placeholder="Enter email"
      />
    </>
  );
};

export default Autocomp;
