import CommonCard from "../component/CommonCard";

function OrderDetail() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Detail Pesanan</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="p-2">
                <CommonCard>
                    <p>status pesanan</p>
                    <p>Diterima</p>
                    <p>waktu penyewaan</p>
                    <p>1 hari</p>
                    <p>nomor pesanan</p>
                    <p>01/11/1111</p>
                </CommonCard>
                <CommonCard classExtend="mt-4">
                    <p>Adidas Off</p>
                    <div className="flex">
                        <div className="w-36 h-36 bg-blue-400"></div>
                        <div>
                            <p>sepatu</p>
                            <p>x1</p>
                            <p>total</p>
                            <p>Rp100</p>
                            <p>Catatan</p>
                            <p>bla bla</p>
                        </div>
                    </div>
                </CommonCard>
                <CommonCard classExtend="mt-4">
                    <p>detail</p>
                    <div className="flex">
                        <div className="w-1/2">
                            <p>asd</p>
                        </div>
                        <div className="w-1/2">
                            <p>asd</p>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <p>asd</p>
                        </div>
                        <div className="w-1/2">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit nunc vitae libero vehicula aliquam. Etiam condimentum dictum laoreet.</p>
                        </div>
                    </div>
                </CommonCard>
            </div>
            <div className="absolute bottom-0 p-4 w-full flex flex-col items-center">
                <button className="py-2 w-full bg-blue-400 rounded-xl">Chat</button>
                <button className="py-2 w-full bg-blue-400 rounded-xl mt-2">Batalkan</button>
            </div>
        </div>
    )
}

export default OrderDetail