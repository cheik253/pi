import { Route } from '@mui/icons-material';
import React from 'react';
import ReactApexChart from 'react-apexcharts';
import {BrowserRoute} from 'react-dom';
export default function Approutes(){
    return (

<BrowserRoute>
<Routes>
    <Route path='/' element={<Dash}></Route>
</Routes>
</BrowserRoute>

    );
}