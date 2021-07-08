import CommonCard from '../component/CommonCard';

function Payment() {
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
                <CommonCard>
                    <div className="flex">
                        <div className="w-36 h-36 bg-blue-400">

                        </div>
                        <div className="flex-1 ml-4">

                        </div>
                    </div>
                </CommonCard>
                <h3>alamat</h3>
                <CommonCard>
                    <div className="flex flex-row">
                        <p className="flex-1 border-b-2">asdasdasdas</p>
                        <button className="ml-4">Ubah</button>
                    </div>
                </CommonCard>
                <h3>metode</h3>
                <CommonCard>
                    <div className="flex flex-row">
                        <div className="flex-1 border-b-2 flex flex-row items-center">
                            <div className="w-4 h-4 bg-black"></div>
                            <p className="flex-1 ml-2">Bank BNI</p>
                        </div>
                        <button className="ml-4">Ubah</button>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex-1 border-b-2 flex flex-row items-center">
                            <div className="w-4 h-4 bg-black"></div>
                            <p className="flex-1 ml-2">Kurir rental</p>
                            <p>Rp10.0000</p>
                        </div>
                        <button className="ml-4">Ubah</button>
                    </div>
                </CommonCard>
                <CommonCard classExtend="mt-2">
                    <div className="flex flex-row items-center">
                        <p>kode promo</p>
                        <div className="flex-1 ml-2 bg-gray-200">
                            as
                        </div>
                        <div>
                            <p>cashback</p>
                            <p>Rp10.000</p>
                        </div>
                    </div>
                </CommonCard>
            </div>
            <div className="absolute bottom-0 w-full flex flex-row items-center px-4 p-2 border-t-2">
                <div className="flex-1">
                    <p>total bayar</p>
                    <p>Rp310.000</p>
                </div>
                <buttom className="bg-sewaqu-red text-white rounded-xl px-6 py-2 text-xl font-semibold">Bayar sekarang</buttom>
            </div>
        </div>
    )
}

export default Payment;