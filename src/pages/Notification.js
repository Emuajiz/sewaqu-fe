import CommonCard from "../component/CommonCard";

function Notification() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Notifikasi</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="flex text-center border-b-2 p-2">
                <div className="flex-1">
                    <p className="font-bold">Update</p>
                </div>
                <div className="flex-1">
                    <p>Transaksi</p>
                </div>
            </div>
            <div className="p-4">
                <CommonCard>
                    <div className="h-16"></div>
                </CommonCard>
                <CommonCard classExtend="mt-2">
                    <div className="h-16"></div>
                </CommonCard>
                <CommonCard classExtend="mt-2">
                    <div className="h-16"></div>
                </CommonCard>
                <CommonCard classExtend="mt-2">
                    <div className="h-16"></div>
                </CommonCard>
            </div>
        </div>
    )
}

export default Notification