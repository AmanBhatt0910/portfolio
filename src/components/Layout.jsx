import React, { Children } from "react";

import Header from "./molecules/Header";
import Footer from "./molecules/Footer";

export default function Layout({children}) {
    return(
        <>
            <Header/>
            <div className="bg-[#161826;]">
                {children}
            </div>
            <Footer/>
        </>
    )
}