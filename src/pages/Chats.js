import React from "react"

import CommonCard from "../component/CommonCard";

function Chats() {

    const data = [1, 2, 3, 4, 5];

    const list = data.map((val, i) => {
        return (
            <React.Fragment key={i}>
                <CommonCard>
                    <div className="flex relative items-center">
                        <div className="w-16 h-16 bg-gray-500 rounded-full">

                        </div>
                        <div className="flex-1 ml-4">
                            <h4 className="font-bold">nama</h4>
                            <h6>last message</h6>
                        </div>
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-center text-white">
                            <p>{val}</p>
                        </div>
                    </div>
                </CommonCard>
                <div className="mb-2"></div>
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
            <div className="mt-2 p-4">
                {list}
            </div>
        </div>
    )
}

export default Chats;