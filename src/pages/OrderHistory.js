import CategoryCard from "../component/CategoryCard";
import CommonCard from "../component/CommonCard";

function OrderHistory() {

    const data = [1, 2, 3, 4]

    const card = data.map((val, i) => {
        return (
            <div className="flex">
                <CommonCard classExtend="flex-1 mx-2 mt-2">
                    <p>hi</p>
                </CommonCard>
            </div>
        )
    })

    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Riwayat Pemesanan</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <h3 className="ml-2 text-xl mt-4">Penyewaan saya</h3>
            <div className="flex justify-around">
                <CommonCard classExtend="w-20 h-20">
                    <p>hi</p>
                </CommonCard>
                <CommonCard classExtend="w-20 h-20">
                    <p>hi</p>
                </CommonCard>
                <CommonCard classExtend="w-20 h-20">
                    <p>hi</p>
                </CommonCard>
                <CommonCard classExtend="w-20 h-20">
                    <p>hi</p>
                </CommonCard>
            </div>
            <h3 className="ml-2 text-xl mt-4">Penyewaan saya</h3>
            <div className="flex justify-around">
                <CommonCard classExtend="w-20 h-20">
                    <p>hi</p>
                </CommonCard>
                <CommonCard classExtend="w-20 h-20">
                    <p>hi</p>
                </CommonCard>
                <CommonCard classExtend="w-20 h-20">
                    <p>hi</p>
                </CommonCard>
                <CommonCard classExtend="w-20 h-20">
                    <p>hi</p>
                </CommonCard>
            </div>
            <h3 className="ml-2 text-xl mt-4">Penyewaan saya</h3>
            {card}
        </div>
    )
}

export default OrderHistory;