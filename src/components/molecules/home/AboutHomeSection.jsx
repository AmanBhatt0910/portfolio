import React from "react";

export default function AboutHomeSection({ data }) {
    return (
        <div className="bg-[#36454F] mx-8 md:mx-32 mt-10 rounded-xl flex flex-col md:flex-row items-center justify-center">
            <div className="w-full md:w-[35vw] p-8 flex flex-col items-center">
                <h2 className="text-white text-2xl font-semibold mb-4">{data.heading}</h2>
                <img src={data.image} alt="" className="w-full max-w-[300px]" />
            </div>
            <div className="w-full md:w-[40vw] p-8 flex flex-col">
                {data.items.map((item, index) => (
                    <div className="flex items-center mb-4 p-2 hover:bg-white hover:bg-opacity-20 rounded-xl transform duration-300" key={index}>
                        <img src={item.icon} alt={item.title + " Icon"} className="w-8 h-8 mr-2" />
                        <div>
                            <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                            <p className="text-gray-300">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
