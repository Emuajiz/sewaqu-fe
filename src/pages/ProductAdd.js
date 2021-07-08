import CommonCard from "../component/CommonCard";

function ProductAdd() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Tambah produk</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="p-4">
                <p className="mt-2">Nama</p>
                <CommonCard>
                    <input className="w-full" type="text" />
                </CommonCard>
                <p className="mt-2">Deskripsi</p>
                <CommonCard>
                    <textarea className="w-full"></textarea>
                </CommonCard>
                <p className="mt-2">Kategori</p>
                <CommonCard>
                    <input className="w-full" type="text" />
                </CommonCard>
                <p className="mt-2">Merek</p>
                <CommonCard>
                    <input className="w-full" type="text" />
                </CommonCard>
                <div className="flex mt-2">
                    <div className="flex-1">
                        <p>Harga</p>
                        <CommonCard>
                            <input className="w-full" type="text" />
                        </CommonCard>
                    </div>
                    <div className="flex-1 ml-2">
                        <p>Waktu sewa</p>
                        <CommonCard>
                            <input className="w-full" type="text" />
                        </CommonCard>
                    </div>
                </div>
                <div className="flex mt-2">
                    <div className="flex-1">
                        <p>Stok</p>
                        <CommonCard>
                            <input className="w-full" type="text" />
                        </CommonCard>
                    </div>
                    <div className="flex-1 ml-2">
                        <p>Berat</p>
                        <CommonCard>
                            <input className="w-full" type="text" />
                        </CommonCard>
                    </div>
                </div>
                <p className="mt-2">Tambah harga</p>
                <p className="mt-2">Kebijakan sewa</p>
                <CommonCard>
                    <textarea className="w-full"></textarea>
                </CommonCard>
                <p className="mt-2">Jangkauan</p>
                <CommonCard>
                    <input className="w-full" type="text" />
                </CommonCard>
                <p className="mt-2">Metode pengiriman</p>
                <div>
                    <div className="flex items-center">
                        <input type="checkbox" value="asd" />
                        <p className="ml-2">asd</p>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" value="asd" />
                        <p className="ml-2">asd</p>
                    </div>
                </div>
                <div className="flex flex-nowrap overflow-x-auto">
                    <div className="p-2">
                        <div className="w-24 h-24 bg-blue-400"></div>
                    </div>
                    <div className="p-2">
                        <div className="w-24 h-24 bg-blue-400"></div>
                    </div>
                    <div className="p-2">
                        <div className="w-24 h-24 bg-blue-400"></div>
                    </div>
                    <div className="p-2">
                        <div className="w-24 h-24 bg-blue-400"></div>
                    </div>
                    <div className="p-2">
                        <div className="w-24 h-24 bg-blue-400"></div>
                    </div>
                    <div className="p-2">
                        <div className="w-24 h-24 bg-blue-400"></div>
                    </div>
                    <div className="p-2">
                        <div className="w-24 h-24 bg-blue-400"></div>
                    </div>
                </div>
                <p>1.bla</p>
                <p>1.bla</p>
                <p>1.bla</p>
                <div className="py-2">
                    <button className="bg-sewaqu-red text-white w-full p-2 rounded-xl">asd</button>
                </div>
            </div>
        </div>
    )
}

export default ProductAdd