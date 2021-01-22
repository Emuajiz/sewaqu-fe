import LayoutApp from "../layouts/App";

function Category() {
    const categories = ["Sepeda", "Motor", "Kost/ Rumah", "Komputer/ Gadget", "Mobil", "Perlengkapan Anak", "Perlengkapan Outdoor", "Kamera", "Villa", "Ruko/ Toko", "Peralatan Usaha", "Alat Pertanian", "Fashion", "Perlengkapan Event", "Gedung Pertemuan"]

    const card = categories.map((val, i) => {
        return (
            <div key={i}>
                <div className="w-28 h-28 p-2 mt-4 text-center text-sm border-2 rounded-lg shadow-lg">
                    <div className="w-12 h-12 mx-auto">
                        <img src="/icons/car.png" />
                    </div>
                    <p className="mt-2">{val}</p>
                </div>
            </div>
        )
    })

    return (
        <LayoutApp>
            <h3 className="ml-2 mt-4 text-xl">Semua kategori</h3>
            <div className="flex flex-row flex-wrap justify-evenly">
                {card}
            </div>
        </LayoutApp>
    )
}

export default Category;