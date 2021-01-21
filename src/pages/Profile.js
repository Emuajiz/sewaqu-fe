import CommonCard from "../component/CommonCard";

function Profile() {
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
                        <div className="ml-4">
                            <h3>Nama</h3>
                            <h5>poin</h5>
                        </div>
                        <div className="absolute right-0 top-0 w-4 h-4 bg-blue-400">

                        </div>
                        <div className="absolute right-0 bottom-0 px-4 py-1 bg-blue-400 rounded-xl">
                            <button>Verif</button>
                        </div>
                    </div>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p className="text-center">punya usaha</p>
                    <div className="mt-4 w-24 h-24 bg-blue-400 mx-auto"></div>
                    <div className="w-min mt-4 mx-auto">
                        <button className="px-4 py-1 bg-blue-400 rounded-xl">Daftar</button>
                    </div>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>Rep</p>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>Saran</p>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>bantuan</p>
                </CommonCard>
                <div className="mt-2"></div>
                <CommonCard>
                    <p>keluar</p>
                </CommonCard>
            </div>
        </div>
    )
}

export default Profile;