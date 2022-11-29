
import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";

/* PAGINAS */
import NewServiceForm from "../Components/NewServiceForm/NewServiceForm";

const AdminRoutes = () =>{
    return(
        <Routes>
            <Route path="/create_service" element={<NewServiceForm/>}/>
        </Routes>
    );
}

export default AdminRoutes;