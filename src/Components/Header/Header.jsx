
import { useNavigate } from 'react-router-dom'

import React, { Component } from 'react'

import styleclass from '../Header/Header.module.scss'
import menu from '../../assets/menu.png'
import Button from '../Button/Button'

import AdminRoutes from '../../Routes/AdminRoutes'

const Header = () => {

    const   navigate = useNavigate();
    return (
        <header>

            <div className={styleclass["header-container"]}>

                <div className={styleclass["logo-container"]}>
                    <figure>
                        <img src={menu} alt="menu" />
                    </figure>
                    <div className={styleclass["index-title"]} onClick={()=> navigate("/")}>
                        <h3>EL SALVADOR</h3>
                    </div>
                </div>
                <div className={styleclass["search-container"]}>
                    <input type="text" name="" id="" placeholder='' />
                </div>
                <div className={styleclass["main-action-container"]}>
                    <div>
                        <h4 onClick={()=> navigate("/create_service")}>Crea un servicio</h4>
                        <h4 >Login</h4>
                        <Button onClick={()=> navigate("/singup")}> Registrarse</Button>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;