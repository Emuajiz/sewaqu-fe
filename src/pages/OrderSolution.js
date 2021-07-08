import Navbar from "../component/Navbar";

function OrderSolution() {
    return (
        <div>
            <Navbar title="Ubah Solusi"/>
            <p className="p-4">Pilih solusi</p>
            <div className="border-t-2 border-b-2 p-4">
                <p>Tukar Produk</p>
            </div>
            <div className="border-t-2 border-b-2 p-4 mt-2">
                <p>Pengembalian Dana</p>
            </div>
            <div className="absolute w-full bottom-0 p-4">
                <button className="w-full bg-sewaqu-red py-4 text-xl font-bold text-white rounded-xl">Ubah Solusi</button>
            </div>
        </div>
    )
}

export default OrderSolution