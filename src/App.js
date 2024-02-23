// App.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import Sidemenu from './Components/Sidemenu';
import Appfooter from './Components/Appfooter';
import Appheader from './Components/Appheader';
import { Space } from 'antd';
import Pagecontent from './Components/Pagecontent';

import './App.css'; // Assuming your CSS file is named 'App.css'

function App() {
  return (
    <div className="App">
      <Appheader />
      <Space className='SideMenuPageContent'>
        <Sidemenu />
        <Pagecontent />
      </Space>
      <Appfooter />
    </div>
  );
}

export default App;
