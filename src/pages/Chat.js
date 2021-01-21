import React from "react"

import CommonCard from "../component/CommonCard";

function Chat() {

    const data = [1, 2, 3, 4, 5]

    const list = data.map((val, i) => {
        return (
            <React.Fragment key={i}>
                <div className="flex ml-16 items-end mr-4 mb-2">
                    <CommonCard classExtend="flex-1">
                        <div className="h-16"></div>
                    </CommonCard>
                    <div className="h-16 w-16 rounded-full ml-4 bg-blue-400"></div>
                </div>
                <div className="flex ml-4 items-end mr-16 mb-2">
                    <div className="h-16 w-16 rounded-full mr-4 bg-blue-400"></div>
                    <CommonCard classExtend="flex-1">
                        <div className="h-16"></div>
                    </CommonCard>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Pesan</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <p className="mt-4 text-center px-12 text-sm leading-none mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            {list}
            <div className="fixed w-full z-20 bottom-0 nav flex p-4">
                <CommonCard classExtend="bg-white flex py-4 w-full">
                    <div className="h-6 w-6 m-2 bg-blue-400 rounded-full"></div>
                    <input className="flex-1" />
                    <div className="h-6 w-6 m-2 bg-blue-400 rounded-full"></div>
                    <div className="h-6 w-6 m-2 bg-blue-400 rounded-full"></div>
                </CommonCard>
            </div>
        </div>
    )
}

export default Chat;