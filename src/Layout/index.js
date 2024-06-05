import React from 'react'
import style from './style.module.scss'
import Header from '../pages/Header'
import Footer from '../pages/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <div className={style.outletStyle}>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout