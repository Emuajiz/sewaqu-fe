import { useState } from "react"

import CommonCard from "../component/CommonCard"
import { numberWithCommas } from "../helper";

function Rent() {

    const [selectedStep, setSelectedStep] = useState(1);

    const data = [
        {
            name: "Sepatu Adidas",
            total: 1,
            totalPrice: 100000,
        }
    ]
    const stepName = ["Pesanan baru", "Dikemas", "Dikirimkan", "Diterima", "Dikembalikan", "Selesai", "Dibatalkan"]

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

    const buttonText = () => {
        switch (selectedStep) {
            case 0:
                return "Terima"
            case 1:
                return "Kirim"
            case 2:
                return "Lacak"
            case 3:
                return "Lihat"
            case 4:
                return "Lacak"
            case 5:
                return "Selesai"
            case 6:
                return "Lihat"
            default:
                return "Lihat"
        }
    }

    const itemCards = data.map((val, i) => {
        return (
            <CommonCard key={i}>
                <div className="flex">
                    <div className="w-36 h-36 bg-blue-400">

                    </div>
                    <div className="flex-1 ml-4">
                        <h3 className="text-2xl">{val.name}</h3>
                        <h3>x{val.total}</h3>
                        <h3 className="mt-2">total</h3>
                        <h3 className="text-xl">Rp{numberWithCommas(val.totalPrice)}</h3>
                        <div className="flex justify-end">
                            <button className="bg-gray-100 p-2 rounded-lg">{buttonText()}</button>
                        </div>
                    </div>
                </div>
            </CommonCard>
        )
    })

    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Rental saya</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-nowrap overflow-x-auto border">
                {sliderStep}
            </div>
            {itemCards}
        </div>
    )
}

export default Rent;