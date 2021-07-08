function Wallet() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Saldo saya</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="p-4 border-t-2 border-b-2 mt-4">
                <p>Saldo</p>
                <p>Rp500.000</p>
            </div>
        </div>
    )
}

export default Wallet