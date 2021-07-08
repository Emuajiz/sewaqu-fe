import CommonCard from "../component/CommonCard";

function Feedback() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Masukan dan saran</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="p-4">
                <p>Berikan masukan dan saran</p>
                <CommonCard>
                    <textarea className="w-full" placeholder="tulis disini"></textarea>
                </CommonCard>
                <div className="flex flex-row-reverse">
                    <button className="bg-sewaqu-red text-white px-4 py-2 rounded-xl mt-4">Kirimkan</button>
                </div>
            </div>
        </div>
    )
}

export default Feedback