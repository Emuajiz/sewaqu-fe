import CommonCard from "../component/CommonCard";

function Store() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Rental saya</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="mx-2 mt-4">
                <CommonCard>
                    <div className="relative flex p-4">
                        <div className="w-16 h-16 bg-blue-400 rounded-full">

                        </div>
                        <div className="ml-4">
                            <h3>Nama</h3>
                            <h5>transaksi</h5>
                        </div>
                        <div className="absolute right-0 bottom-0 px-4 py-1 bg-blue-400 rounded-xl">
                            <button>Verif</button>
                        </div>
                    </div>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>Saldo</p>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>nilai</p>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>pengiriman</p>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>alamat</p>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>masukan</p>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>bantuan</p>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>keluar</p>
                </CommonCard>
            </div>
        </div>
    )
}

export default Store;