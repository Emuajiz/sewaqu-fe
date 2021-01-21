import { useState } from "react"

import CommonCard from "../component/CommonCard"

function Order() {

    const [selectedStep, setSelectedStep] = useState(1);

    const stepName = ["Belum bayar", "Dikemas", "Dikirimkan", "Diterima", "Dikembalikan", "Selesai", "Dibatalkan"]
    
    const handleStepChange = (i) => {
        setSelectedStep(i);
    }

    const sliderStep = stepName.map((val, i) => {
        return (
            <div key={i} onClick={() => handleStepChange(i)}>
                <div className="p-2">
                    <h3 className={(selectedStep === i ? "font-semibold " : "") + "whitespace-nowrap"}>{val}</h3>
                </div>
            </div>
        )
    })


    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Penyewaan saya</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-nowrap overflow-x-auto border">
                {sliderStep}
            </div>
            <CommonCard>
                <div className="flex">
                    <div className="w-36 h-36 bg-blue-400">

                    </div>
                    <div className="flex-1 ml-4">
                        <h3 className="text-2xl">nama</h3>
                        <h3>x1</h3>
                        <h3 className="mt-2">total</h3>
                        <h3 className="text-xl">nominal</h3>
                        <div className="flex justify-end">
                            <button className="bg-gray-100 p-2 rounded-lg">Bayar</button>
                        </div>
                    </div>
                </div>
            </CommonCard>
        </div>
    )
}

export default Order;