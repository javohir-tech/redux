import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../Components/MainNavbar'

function MainLayout() {
    return (
        <>
            <MainNavbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default MainLayout
