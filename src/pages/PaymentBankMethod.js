import CommonCard from "../component/CommonCard";

function PaymentBankMethod() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Rental saya</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="p-4">
                <h3>Metode Pembayaran</h3>
                <h3>Aplikasi E-Wallet</h3>
                <CommonCard classExtend="mt-2">
                    <div className="flex flex-row items-center">
                        <div className="w-32 h-16 border-2">img</div>
                        <p className="flex-1">asdasdasdas</p>
                        <div className="w-8 h-8 rounded-full border-2"></div>
                    </div>
                </CommonCard>
                <h3 className="mt-4">Bank Transfer</h3>
                <CommonCard classExtend="mt-2">
                    <div className="flex flex-row items-center">
                        <div className="w-32 h-16 border-2">img</div>
                        <p className="flex-1">asdasdasdas</p>
                        <div className="w-8 h-8 rounded-full border-2"></div>
                    </div>
                </CommonCard>
                <CommonCard classExtend="mt-2">
                    <div className="flex flex-row items-center">
                        <div className="w-32 h-16 border-2">img</div>
                        <p className="flex-1">asdasdasdas</p>
                        <div className="w-8 h-8 rounded-full border-2"></div>
                    </div>
                </CommonCard>
            </div>
        </div>
    
    )
}

export default PaymentBankMethod;