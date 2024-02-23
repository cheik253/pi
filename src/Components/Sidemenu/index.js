import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {Menu} from 'antd';
import { DashboardOutlined, ShoppingOutlined, AppstoreOutlined, UsergroupDeleteOutlined } from '@ant-design/icons';
import { ApprovalOutlined } from '@mui/icons-material';
export default function Sidemenu() {
    return(   
    <div className='Sidemenu'>
   
<Menu onClick={(item) => {

}
} items={[{

label:'dashboard',
icon: <DashboardOutlined /> ,
key:'/'
},{
    label:'Inventory',
    icon: <ShoppingOutlined />,
    key:'/Inventory'  
},{
    label:'Orders',
    key:'/Orders'  ,
    icon: <AppstoreOutlined />
},{
    label:'Customers',
    key:'/Customers'
    ,icon:  <UsergroupDeleteOutlined />  
}
]}>

</Menu>
   
   
       </div>
       
       
       );
   }