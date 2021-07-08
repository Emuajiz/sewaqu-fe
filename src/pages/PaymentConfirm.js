import CommonCard from "../component/CommonCard";

function PaymentConfirm() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Pembayaran</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="p-4">
                <div className="mt-4 flex">
                    <p className="flex-1">Total Pembayaran</p>
                    <p>Rp310.000</p>
                </div>
                <CommonCard classExtend="mt-2">
                    <div className="flex flex-row items-center">
                        <div className="w-16 h-8 border">Bank</div>
                        <p className="flex-1">0123123412341234</p>
                        <p>Salin</p>
                    </div>
                </CommonCard>
                <CommonCard classExtend="mt-2">
                    <div className="flex flex-col text-center">
                        <p>11:11:11</p>
                        <p>Bayar sebelum waktu habis</p>
                    </div>
                </CommonCard>
                <p>tata cara pembayaran</p>
                <CommonCard>
                    <p>Lewat Atm</p>
                    <p>Lewat M-Banking</p>
                </CommonCard>
            </div>
            <div className="flex w-full absolute bottom-0 p-4">
                <button className="border-2 w-full p-2 rounded-xl mx-2">Lihat Orderan</button>
                <button className="bg-sewaqu-red w-full p-2 rounded-xl text-white mx-2">Konfirmasi</button>
            </div>
        </div>
    )
}

export default PaymentConfirm