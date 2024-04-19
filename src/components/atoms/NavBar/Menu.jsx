import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ buttonData }) {
    return (
        <>
            <div className="flex items-center">
                <ul className="flex space-x-4">
                    {buttonData.map((item, index) => (
                        <li className="" key={index}>
                            <Link to={item.link} className="text-white hover:text-gray-300">
                                <div>{item.title}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
