// Drawers.js
import React, { useState } from 'react';
import { Avatar, Calendar, Carousel, Checkbox, Menu, Radio, Result, Spin, Steps, Tabs, Transfer, TreeSelect, Upload } from 'antd';
import { HomeOutlined ,BankOutlined} from '@ant-design/icons';
import Breadcrumbs from './breadcrumbs';
import SignInPage from './SignInPage';
import Signup from './signup';
import Buttons from './Button';
import Typographys from './Typography';
import Date from './date';
import Dividers from './divider';
import Usersdata from './usersdata';
import Grids from './grid';
import Layouts from './Layout';
import DropDownButton from './Dropdown';
import SpinExample from './Spin';
import Notify from './Notification';
import ProgressBars from './Progress';
import Uploads from './Upload';
import Autocomp from './AutoComplete ';
import Cascade from './Cascader';
import Check from './Checkbox';
import Step from './Steps';
import Tours from './Tour';
import ToolTips from './Tooltip';
import Timelines from './Timeline';
import Slide from './Slider_Switch';
import Time from './TimePicker';
import Results from './Result';
import Avatars from './Avatar';





const Drawers = () => {
  const [selectedKey, setSelectedKey] = useState('1');

  const handleClick = (e) => {
    setSelectedKey(e.key);
  };

  const renderContent = (key) => {
    switch (key) {
      case '1':
        return <SignInPage />;
      case '2':
        return <Signup />;
      case '3':
        return <Typographys />;
      case '4':
        return <Buttons />;
      case '5':
        return <Date />;
      case '6':
        return <Dividers />;
      case '7':
        return <Grids />;
      case '8':
        return <Usersdata />;
      case '9':
        return <Layouts />;
      case '10':
        return <DropDownButton />;
      case '11':
        return <Autocomp/>;
      case '12':
        return <Cascade/>;
      case '13':
        return <Step/>;
      case '14':
        return <Check />;
      // case '15':
      //   return <Radio />;
      case '16':
        return <Slide />;
      case '17':
        return <Time />;
      // case '18':
      //   return <Transfer />;
      // case '19':
      //   return <TreeSelect />;
      case '20':
        return <Uploads />;
       case '21':
         return <Avatars />;
      //  case '22':
      //    return <Badges />;
      // case '23':
      //   return <Calendar />;
      // case '24':
      //   return <Carousel />;
      // case '25':
      //   return <Card />;
      // case '26':
      //   return <Collapse />;
      // case '27':
      //   return <Tabs />;
      // case '28':
      //   return <Tag />;
      case '29':
        return <Timelines />;
      case '30':
        return <ToolTips />;
      case '31':
        return <Tours />;
      case '32':
        return <Notify />;
      case '33':
        return <ProgressBars />;
      case '34':
         return <Results />;
      case '35':
        return <SpinExample />;
      // case '36':
      //   return <Report />;

      default:
        return <div>Not Found</div>;
    }
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
      <Menu
        style={{height:'100vh',overflow:'scroll', width: '200px', textAlign: 'center', alignSelf: 'start' }}
        onClick={handleClick}
        selectedKeys={[selectedKey]}
        mode="vertical"
      >
                <Menu.Item key="1">
        SignInPage
        </Menu.Item>
        <Menu.Item key="2">
        SignUpage
                </Menu.Item>
        <Menu.Item key="3">
        Typography
        </Menu.Item>
        <Menu.Item key="4">
            Buttons
        </Menu.Item>
        <Menu.Item key="5">
            Date Picker
        </Menu.Item>
        <Menu.Item key="6">
            Divider
        </Menu.Item>
        <Menu.Item key="7">
            Grids
        </Menu.Item>
        <Menu.Item key="8">
            Table
        </Menu.Item>
        <Menu.Item key="9">
            Layout
        </Menu.Item>
        <Menu.Item key="10">
          DropDownButton
        </Menu.Item>
        <Menu.Item key="11">
           Autocomplete
        </Menu.Item>
        <Menu.Item key="12">
         Cascader
        </Menu.Item>
        <Menu.Item key="13">
          Steps
        </Menu.Item>
        <Menu.Item key="14">
          Checkbox
        </Menu.Item>
        <Menu.Item key="15">
          Radio
        </Menu.Item>
        <Menu.Item key="16">
          Slider_switch
        </Menu.Item>
        <Menu.Item key="17">
          Timepicker
        </Menu.Item>
        <Menu.Item key="18">
          Transfer
        </Menu.Item>
        <Menu.Item key="19">
          Treeselect
        </Menu.Item>
        <Menu.Item key="20">
          Upload
        </Menu.Item>
        <Menu.Item key="21">
          Avatars
        </Menu.Item>
        <Menu.Item key="22">
          Badges
        </Menu.Item>
        <Menu.Item key="23">
          Calender
        </Menu.Item>
        <Menu.Item key="24">
          Carousel
        </Menu.Item>
        <Menu.Item key="25">
          Card
        </Menu.Item>
        <Menu.Item key="26">
          Collapse
        </Menu.Item>
        <Menu.Item key="27">
          Tabs
        </Menu.Item>
        <Menu.Item key="28">
          Tag
        </Menu.Item>
        <Menu.Item key="29">
          Timeline
        </Menu.Item>
        <Menu.Item key="30">
          Tooltip
        </Menu.Item>
        <Menu.Item key="31">
          Tour
        </Menu.Item>
        <Menu.Item key="32">
          Notification
        </Menu.Item>
        <Menu.Item key="33">
         Progress
        </Menu.Item>
        <Menu.Item key="34">
          Results
        </Menu.Item>
        <Menu.Item key="35">
          Spin
        </Menu.Item>
        <Menu.Item key="36">
          Report
        </Menu.Item>
      </Menu>
      <div style={{ width: '100%', maxHeight:'100vh', overflow:'scroll' }} className="main-content">
      <Breadcrumbs selectedKey={selectedKey} />
        {renderContent(selectedKey)}
      </div>
    </div>
  );
};

export default Drawers;
