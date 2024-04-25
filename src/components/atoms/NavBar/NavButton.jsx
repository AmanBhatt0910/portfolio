import React from "react";

export default function NavButton(props) {
    return(
        <>
            <button className="px-6 py-2 text-white border-2 border-[#5F73B0] rounded-2xl hover:text-[#5F73B0] hover:bg-white transition duration-300 transform hover:scale-110">
                {props.heading}
            </button>
        </>
    )
}