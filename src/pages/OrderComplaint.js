function OrderComplaint() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Ubah Solusi</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <p className="p-4">Pilih Alasan Komplain</p>
            <div className="border-t-2 border-b-2 p-4">
                <p>Produk tidak sesuai deskripsi</p>
            </div>
            <div className="border-t-2 border-b-2 p-4 mt-2">
                <p>produk rusak/cacat</p>
            </div>
        </div>
    )
}

export default OrderComplaint