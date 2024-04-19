import React from "react";

export default function NavButton(props) {
    return(
        <>
            <button className="px-6 py-2 text-white border border-blue-600 rounded-2xl hover:text-blue-600 hover:bg-white transition duration-200">
                {props.heading}
            </button>
        </>
    )
}