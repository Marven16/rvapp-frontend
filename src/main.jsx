import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer} from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

import axios from 'axios'


axios.defaults.baseURL = import.meta.env.VITE_APIENDPOINT || "https://resenasesa.com/api";
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  </React.StrictMode>
)
