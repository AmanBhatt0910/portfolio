import React from "react";
import Hero from "../molecules/home/Hero";
import AboutHomeSection from "../molecules/home/AboutHomeSection";
import TechnologyHome from "../molecules/home/TechnologyHome";

export default function Home() {

    const aboutData = {
        heading: "About Me",
        image: "/home/aboutImage.svg",
        items: [
            {
                title: "Frontend Developer",
                icon: "/home/frontend-icon.png",
                description: "Crafting user interfaces with React and TailwindCSS.",
            },
            {
                title: "Backend Developer",
                icon: "/home/backend-icon.png",
                description: "Building robust APIs and handling server-side logic.",
            },
            {
                title: "UI Designer",
                icon: "/home/ui-designer-icon.png",
                description: "Creating visually appealing and intuitive user interfaces.",
            },
        ],
    };

    return(
        <>
            <Hero
            heading = "Hi, I’m Aman Bhatt..."
            paragraph = "Welcome to my digital hub! I'm Aman Bhatt, currently pursuing B.Tech in Computer Science Engineering, entering my second year. My playground includes HTML, CSS, JavaScript, React, and Tailwind CSS. Join me as I blend creativity with technology to build immersive digital experiences."
            />
            <AboutHomeSection data = {aboutData}/>
            <TechnologyHome heading = "TECHNOLOGY"/>
        </>
    )
}