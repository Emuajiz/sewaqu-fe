function Setting() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Pengaturan</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="mt-4">
                <div className="flex border px-6 py-2 mt-2">
                    <div className="flex-1">
                        <p>Bahasa</p>
                    </div>
                </div>
                <div className="flex border px-6 py-2 mt-2">
                    <div className="flex-1">
                        <p>Notifikasi</p>
                    </div>
                </div>
                <div className="flex border px-6 py-2 mt-2">
                    <div className="flex-1">
                        <p>Privasi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting