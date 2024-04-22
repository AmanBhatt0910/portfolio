import React from "react";
import Menu from "../atoms/NavBar/Menu";
import NavButton from "../atoms/NavBar/NavButton";

export default function Header() {
    const navData = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "About",
            link: "/about"
        },
        {
            title: "Portfolio",
            link: "/portfolio"
        },
        {
            title: "Skills",
            link: "/skills"
        },
        {
            title: "Contact",
            link: "/contact"
        },
    ]
    return(
        <>
            <div className="flex items-center justify-around p-2">
                <a href="/" className="">
                    <img className="w-36" src="/logo.png" alt="logo" />
                </a>
                <Menu buttonData={navData} />
                <div className="">
                    <NavButton heading = "Hire me"/>
                </div>
            </div>
        </>
    )
}
