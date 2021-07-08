import CommonCard from "../component/CommonCard";

function AboutUs() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Tentang Kami</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="mt-4 px-4">
                <CommonCard>
                    <p>asd</p>
                </CommonCard>
            </div>
        </div>
    )
}

export default AboutUs