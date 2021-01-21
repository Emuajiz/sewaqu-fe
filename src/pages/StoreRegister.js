import CommonCard from "../component/CommonCard";

function StoreRegister() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Profile</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>

            <div className="mx-2 mt-4">
                <CommonCard>
                    <div className="relative flex p-4">
                        <div className="w-16 h-16 bg-blue-400 rounded-full">

                        </div>
                        <div className="absolute right-0 bottom-0 px-4 py-1 bg-blue-400 rounded-xl">
                            <button>upload foto</button>
                        </div>
                    </div>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <input className="w-full" type="text" placeholder="nama rental" />
                </CommonCard>
                <div className="mt-2"></div>
                <p className="ml-2">Alamat</p>
                <div className="mt-2"></div>
                <CommonCard>
                    <input className="w-full" type="text" placeholder="alamat lengkap" />
                </CommonCard>
                <div className="flex">
                    <div className="w-1/2 mt-2 pr-1">
                        <CommonCard>
                            <p>kota</p>
                        </CommonCard>
                    </div>
                    <div className="w-1/2 mt-2 pl-1">
                        <CommonCard>
                            <p>prov</p>
                        </CommonCard>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-1/2 mt-2 pr-1">
                        <CommonCard>
                            <input className="w-full" type="text" placeholder="kode pos" />
                        </CommonCard>
                    </div>
                </div>
                <div className="mt-2"></div>
                <p>lokasi</p>
                <p>untuk instan kurir</p>
                <div className="mt-2"></div>
                <CommonCard>
                    <div className="h-24">

                    </div>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <input className="w-full" type="text" placeholder="No HP rental" />
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>pilih bank</p>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <input className="w-full" type="text" placeholder="No. Rekening" />
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <input className="w-full" type="text" placeholder="Atas nama" />
                </CommonCard>
                <div className="flex">
                    <div className="w-1/2 mt-2 pr-1">
                        <CommonCard>
                            <div className="h-16"></div>
                        </CommonCard>
                    </div>
                    <div className="w-1/2 mt-2 pl-1">
                        <CommonCard>
                            <div className="h-16"></div>
                        </CommonCard>
                    </div>
                </div>
            </div>
            <div className="w-full p-4 bg-gray-300 mt-4">
                <div className="mx-auto w-min">
                    <button className="bg-sewaqu-red px-8 py-2 rounded-lg font-bold text-white">Daftarkan</button>
                </div>
            </div>
        </div>
    )
}

export default StoreRegister;