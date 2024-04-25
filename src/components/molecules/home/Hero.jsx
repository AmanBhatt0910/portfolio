import React from "react";
import NavButton from "../../atoms/NavBar/NavButton";

export default function Hero(props) {
    return (
        <>
            <div className="pt-[50px] flex text-white">
                <div className="w-[60vw] py-10 pl-10 flex flex-col justify-center">
                    <h1 className = "text-5xl m-5">
                        {props.heading} 
                    </h1>
                    <p className="m-5 text-lg">
                        {props.paragraph}
                    </p>
                    <div className="m-5 pt-2">
                        <NavButton heading = "Contact Me"/>
                    </div>
                </div>
                <div className="w-[40vw] py-10 pr-10 flex justify-center items-center">
                    <img className="w-[80%]" src="/home/Img_Without_BG.png" alt="" />
                </div>
            </div>
        </>
    )
}
