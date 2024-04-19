import React, { Children } from "react";

import Header from "./organisms/Header";
import Footer from "./organisms/Footer";

export default function Layout({children}) {
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}