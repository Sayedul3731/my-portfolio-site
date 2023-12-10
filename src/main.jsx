import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import Footer from './components/Footer/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-[#3234a8] text-white'>
      <RouterProvider router={router} />
      <Footer></Footer>
    </div>
  </React.StrictMode>,
)
