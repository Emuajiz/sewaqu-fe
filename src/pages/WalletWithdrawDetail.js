function WalletWithdrawDetail() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Rincian Penarikan</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="p-4 border-t-2 border-b-2 mt-4">
                <p>Jumlah Penarikan</p>
                <p>Saldo saat ini (Rp600.000)</p>
                <p>Rp500.000</p>
            </div>
            <div className="p-4">
                <p>Rekening tujuan untuk penarikan</p>
            </div>
            <div className="p-4 border-t-2 border-b-2 flex">
                <p className="flex-1">BCA</p>
                <p>0888-8888-8888</p>
            </div>
            <div className="p-4 border-t-2 border-b-2 mt-2 flex">
                <p className="flex-1">Biaya Penarikan</p>
                <p>Rp1.500</p>
            </div>
            <div className="p-4 border-t-2 border-b-2 mt-2 flex">
                <p className="flex-1">Total Penarikan</p>
                <p>Rp498.500</p>
            </div>
            <div className="p-4 border-t-2 border-b-2 mt-2 flex">
                <p className="flex-1">No. Penarikan</p>
                <p>1324652</p>
            </div>
            <div className="p-4 border-t-2 border-b-2 mt-2 flex">
                <p className="flex-1">Waktu Penarikan</p>
                <p>12-12-1221, 12.00</p>
            </div>
            <div className="p-4 border-t-2 border-b-2 mt-2 flex">
                <p className="flex-1">Waktu Selesai</p>
                <p>12-12-1221, 12.00</p>
            </div>
            <div className="p-4 border-t-2 border-b-2 mt-2 flex justify-between text-center">
                <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <p>Penarikan dibuat</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <p>Penarikan dibuat</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-black rounded-full"></div>
                    <p>Penarikan dibuat</p>
                </div>
            </div>
        </div>
    )
}

export default WalletWithdrawDetail