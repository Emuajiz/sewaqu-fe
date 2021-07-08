import CommonCard from "../component/CommonCard";

function PaymentAddress() {
    return (

        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Rental saya</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="p-4">
                <h3 className="mt-4">Identitas penerima</h3>
                <CommonCard>
                    <p>Nama</p>
                    <input className="border-b-2 w-full" type="text" />
                    <p>Nomor</p>
                    <input className="border-b-2 w-full" type="text" />
                </CommonCard>
                <h3 className="mt-4">Alamat penerima</h3>
                <CommonCard>
                    <p>Nama</p>
                    <input className="border-b-2 w-full" type="text" />
                    <p>Nomor</p>
                    <input className="border-b-2 w-full" type="text" />
                </CommonCard>
                <h3 className="mt-4">Lokasi Pengiriman</h3>
                <h3>untuk instant courir</h3>
                <CommonCard classExtend="w-full h-48">
                </CommonCard>
            </div>
            <div className="w-full absolute bottom-0 p-4">
                <button className="bg-sewaqu-red w-full p-2 rounded-xl text-white">simpan</button>
            </div>
        </div>
    )
}
export default PaymentAddress