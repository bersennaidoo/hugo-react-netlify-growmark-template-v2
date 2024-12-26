import React, { FC } from "react"
import { Outlet } from "react-router-dom"
import MainNavigation from "./components/MainNavigation"

type RootLayoutProps = {}

const RootLayout: FC<RootLayoutProps> = (props: RootLayoutProps) => {
    const {} = props
    
    return (
        <>
        <MainNavigation />
        <hr />
          <main className="container bg-primary mt-5">
            <Outlet />
          </main>
        </>
    )
}

export default RootLayout