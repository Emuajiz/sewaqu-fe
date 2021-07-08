function WalletHistory() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Riwayat</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="flex p-4">
                <div className="w-1/2 border-2 rounded-xl px-2 py-1 mx-2">
                    <p>Pilih tanggal</p>
                </div>
                <div className="w-1/2 border-2 rounded-xl px-2 py-1 mx-2">
                    <p>Pemasukan</p>
                </div>
            </div>
            <div className="px-6">
                <div className="border-2 text-center rounded-xl py-2">
                    <p>Total pemasukan</p>
                    <p>Rp100.000</p>
                </div>
            </div>
            <div className="mt-4">
                <p className="mx-6">Rincian</p>
                <div className="flex border px-6 py-2 mt-2">
                    <div className="flex-1">
                        <p>Sewa sepatu</p>
                    </div>
                    <p>Rp100.000</p>
                </div>
                <div className="flex border px-6 py-2 mt-2">
                    <div className="flex-1">
                        <p>Sewa sepatu</p>
                    </div>
                    <p>Rp100.000</p>
                </div>
                <div className="flex border px-6 py-2 mt-2">
                    <div className="flex-1">
                        <p>Sewa sepatu</p>
                    </div>
                    <p>Rp100.000</p>
                </div>
            </div>
        </div>
    )
}

export default WalletHistory