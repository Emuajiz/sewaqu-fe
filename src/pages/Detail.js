import "react-responsive-carousel/lib/styles/carousel.min.css";
import BottomBar from "../component/BottomBar";
import ItemSlider from "../component/ItemSlider";
import ReviewSlider from "../component/ReviewSlider";
const { Carousel } = require("react-responsive-carousel");

function Detail() {

    const rating = 4.0;

    return (
        <div className="relative">
            <div className="absolute z-30 flex w-full px-4">
                <div className="flex-1">
                    <div className="w-8 mt-4 rounded-full bg-gray-200 bg-opacity-50 p-2">
                        <img src="/icons/back.png" />
                    </div>
                </div>
                <div className="w-8 ml-2 mt-4 rounded-full bg-gray-200 bg-opacity-50 p-2">
                    <img src="/icons/back.png" />
                </div>
                <div className="w-8 ml-2 mt-4 rounded-full bg-gray-200 bg-opacity-50 p-2">
                    <img src="/icons/back.png" />
                </div>
            </div>
            <Carousel showArrows={false} interval="5000" autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} >
                <div>
                    <img src="/images/1.png" alt="asd" />
                </div>
                <div>
                    <img src="/images/2.png" alt="b" />
                </div>
            </Carousel>
            <div className="shadow-2xl py-4 bg-white">
                <div className="flex mx-4">
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold">Judul barang</h3>
                    </div>
                    <div>
                        <div className="w-8">
                            <img src="/icons/heart.png" />
                        </div>
                    </div>
                </div>
                <h3 className="mx-4 text-lg text-gray-500 font-semibold">Kota</h3>
                <div className="mx-4 flex">
                    <div className="w-2/3">
                        <h3 className="text-lg text-red-500 font-medium">Harga /Hari</h3>
                        <div className="flex items-center">
                            <div className="w-4">
                                <img src="/icons/heart.png" />
                            </div>
                            <div className="w-4 ml-1">
                                <img src="/icons/heart.png" />
                            </div>
                            <div className="w-4 ml-1">
                                <img src="/icons/heart.png" />
                            </div>
                            <div className="w-4 ml-1">
                                <img src="/icons/heart.png" />
                            </div>
                            <div className="w-4 ml-1">
                                <img src="/icons/heart.png" />
                            </div>
                            <p className="ml-1">4.0</p>
                        </div>
                    </div>
                    <div className="w-1/3">
                        <h3 className="text-xs text-red-500">Neque porro quisquam est qui dolorem ipsum</h3>
                    </div>
                </div>
            </div>
            <div className="mx-2 mt-4 flex p-4 bg-white shadow-2xl">
                <div className="px-4 border-2 border-sewaqu-red rounded-full">
                    /jam
                </div>
                <div className="px-4 ml-2 border-2 border-sewaqu-red bg-sewaqu-red rounded-full text-white">
                    harian
                </div>
                <div className="px-4 ml-2 border-2 border-sewaqu-red rounded-full">
                    bulanan
                </div>
            </div>
            <div className="mx-2 mt-4 flex p-4 bg-white shadow-2xl items-center">
                <div className="w-12 h-12 bg-red-500 rounded-full">

                </div>
                <div className="flex-1 ml-2">
                    <h3>toko</h3>
                    <h4>kota</h4>
                </div>
                <div>
                    <div className="px-4 border-2 border-sewaqu-red rounded-full">
                        info
                    </div>
                </div>
            </div>
            <div className="mx-2 mt-4 p-4 bg-white shadow-2xl">
                <div>
                    <h3>Alamat</h3>
                </div>
                <div>
                    <h4>alamat toko</h4>
                </div>
            </div>
            <div className="mx-2 mt-4 p-4 bg-white shadow-2xl">
                <h3>Informasi produk</h3>
                <div className="flex">
                    <div className="flex-1">
                        <h4>Kategri</h4>
                        <h4>Kategri</h4>
                        <h4>Kategri</h4>
                        <h4>Kategri</h4>
                    </div>
                    <div>
                        <h4>mobil</h4>
                        <h4>mobil</h4>
                        <h4>mobil</h4>
                        <h4>mobil</h4>
                    </div>
                </div>
            </div>
            <div className="mx-2 mt-4 p-4 bg-white shadow-2xl">
                <h3>Deskripsi</h3>
                <h3>Kebijakan</h3>
                <h3>Jangkkauan</h3>
            </div>
            <p className="ml-4">pilihan lain</p>
            <ReviewSlider />
            <p className="ml-4">pilihan lain</p>
            <ItemSlider />
            <p className="ml-4">pilihan lain</p>
            <ItemSlider />
            <BottomBar />
        </div>
    )
}

export default Detail;