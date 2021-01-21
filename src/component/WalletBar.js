function WalletBar() {
    return (
        <div className="bg-white-900">
            <div className="shadow m-4 p-4 flex justify-center">
                <div className="flex flex-row items-center">
                    <div className="bg-black h-5 w-5 rounded-full"/>
                    <h1 className="ml-2">Rp50.000</h1>
                </div>
                <div className="ml-4 flex flex-row items-center">
                    <div className="bg-black h-5 w-5 rounded-full"/>
                    <div className="ml-2">
                        <h1 className="text-sm">Poin</h1>
                        <h1 className="text-xs">1000 poin</h1>
                    </div>
                </div>
                <div className="ml-4 flex flex-row items-center">
                    <div className="bg-black h-5 w-5 rounded-full"/>
                    <div className="ml-2">
                        <h1 className="text-sm">Voucher</h1>
                        <h1 className="text-xs">3 voucher</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletBar;