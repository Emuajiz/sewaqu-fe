import CommonCard from "../component/CommonCard";

function ProfileChange() {

    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Profile</h2>
                </div>
                <div className="h-6 w-6 m-2 rounded-full"></div>
            </div>
            <div className="h-16 flex items-center border shadow-lg py-2 px-4 mt-2">
                <div className="h-12 w-12 bg-blue-500 rounded-full"></div>
                <input className="ml-4 flex-1" placeholder="nama" />
            </div>
            <div className="mt-4">
                <p className="ml-4">Username</p>
                <div className="border shadow-lg py-2 px-4 ">
                    <input className="w-full" defaultValue="username" />
                </div>
            </div>
            <div className="mt-4">
                <p className="ml-4">alamat</p>
                <div className="border shadow-lg py-2 px-4">
                    <input className="w-full" defaultValue="alamat sebelumnya" />
                </div>
            </div>

            <div className="flex mt-2">
                <div className="flex-1 border rounded-r-xl shadow-lg py-2 px-4">
                    <p>kecamatan</p>
                </div>
                <div className="flex-1 ml-2 border rounded-l-xl shadow-lg py-2 px-4">
                    <p>provinsi</p>
                </div>
            </div>
            <div className="mt-2 w-1/2 pr-1 ">
                <div className="border rounded-r-xl shadow-lg py-2 px-4">
                    <input className="w-full" defaultValue="16116" />
                </div>
            </div>

            <div className="mt-4">
                <div className="border shadow-lg py-2 px-4">
                    <p>tanggal lahir</p>
                </div>
            </div>

            <div className="mt-2">
                <div className="border shadow-lg py-2 px-4">
                    <p>jk</p>
                </div>
            </div>

            <div className="mt-4">
                <div className="border shadow-lg py-2 px-4">
                    <input className="w-full" defaultValue="089911223344" />
                </div>
            </div>
        </div>
    )
}

export default ProfileChange;