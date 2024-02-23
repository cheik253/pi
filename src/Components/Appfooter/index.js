import React from 'react';
import { Badge, Space, Typography } from 'antd';
import { MailOutlined, BellOutlined } from '@ant-design/icons';
import ReactApexChart from 'react-apexcharts';

export default function Appfooter() {
 return(   
 <div className='Appfooter'>


<Typography.Link href='tel:+12345678'>12345678</Typography.Link>
<Typography.Link href='cheik' >Privacy policy</Typography.Link>
<Typography.Link href='a' >Terms of use</Typography.Link>

    </div>
    
    
    );
}

const PieChartComponent = () => {
    const l1 = [334, 122,55];
    const l2 = ['a', 'b','c'];
  
    const options = {
      labels: l2,
      series: l1,
    };
  
    return (
      <ReactApexChart
        options={options}
        series={options.series}
        type="pie"
        height={230}
        width={250}
      />
    );
  };