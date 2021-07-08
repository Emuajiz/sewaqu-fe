import CommonCard from "../component/CommonCard"

function OrderCancel() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Batalkan Pesanan</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="border-b-2 border-t-2 mt-2 p-4 flex items-center shadow-sm">
                <p className="flex-1">Produk habis</p>
                <div className="w-4 h-4 border-2"></div>
            </div>
            <div className="border-b-2 border-t-2 mt-2 p-4 flex items-center shadow-sm">
                <p className="flex-1">Produk habis</p>
                <div className="w-4 h-4 border-2"></div>
            </div>
            <div className="border-b-2 border-t-2 mt-2 p-4 flex items-center shadow-sm">
                <p className="flex-1">Produk habis</p>
                <div className="w-4 h-4 border-2"></div>
            </div>
            <div className="text-sm text-center mt-4">
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="absolute bottom-0 p-4 w-full">
                <button className="bg-sewaqu-red text-white w-full p-4 rounded-xl font-bold">Batalkan</button>
            </div>
        </div>
    )
}

export default OrderCancel