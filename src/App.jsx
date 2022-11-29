import React from "react";
import { useState } from 'react'
import styleclass from './App.module.scss'

import { Routes, Route } from "react-router-dom";

import Header from './Components/Header/Header'
import Feed from './Pages/Feed/Feed'
import PageNotFound from './Pages/PageNotFound/PageNotFoundV'
import NewServiceForm from "./Components/NewServiceForm/NewServiceForm";
import ServiceCategory from "./Components/ServiceCategory/ServiceCategory";
import SingUp from './Components/SingUpForm/SingUp'


import axios from 'axios';
import { toast } from 'react-toastify';

function App() {

  const [posts, setPosts] = useState([]);

  /* CREACION Y VALIDACION DE SERVICIOS */
  const savePostService = async (category, name_service, address, img_url) => {
    try {
      await axios.post("/post", { category, name_service, address, img_url });
      toast.success("Service added successfully");

    } catch (error) {
      const { status } = error.response || { status: 500 };
      const msg = { "400": "Wrong field or Imcomplete item", "404": "Not found", "500": "Something went wrong" }
      toast.error(msg[status.toString()] || "Unspectede error!");
    }
  }

  const onAddPostHandler = async (category, name_service, address, img_url) => {

    await savePostService(category, name_service, address, img_url);

    /* const _post = [...posts, { category, name_service, address, img_url }];
    setPost(_post); */
  };



  return (
    <div className={styleclass["App"]}>
      <Header />
      <main>
        <Routes>
          <Route index element={<Feed />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/create_service' element={<NewServiceForm onAddPost={onAddPostHandler} />} />
          <Route path='/service_category' element={<ServiceCategory />} />
          <Route path='/singup' element={<SingUp />} />
        </Routes>
      </main>
    </div>
  );
}

export default App
