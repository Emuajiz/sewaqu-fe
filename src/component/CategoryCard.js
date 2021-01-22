function CategoryCard() {

    // const categories = ["Sepeda", "Motor", "Kost/ Rumah", "Komputer/ Gadget", "Mobil", "Perlengkapan Anak", "Perlengkapan Outdoor", "Kamera", "Villa", "Ruko/ Toko", "Peralatan Usaha", "Alat Pertanian", "Fashion", "Perlengkapan Event", "Gedung Pertemuan"]
    const categories = ["Sepeda", "Motor", "Kost/ Rumah", "Komputer/ Gadget", "Mobil", "Perlengkapan Anak", "Perlengkapan Outdoor", "Kamera"]

    let card = []

    for (let index = 0; index < categories.length; index += 2) {
        card.push((
            <div className={index ? "ml-4" : ""} key={index}>
                <div className="w-28 h-28 p-2 text-center text-sm border-2 rounded-lg shadow-lg">
                    <div className="w-12 h-12 mx-auto">
                        <img src="/icons/car.png" />
                    </div>
                    <p className="mt-2">{categories[index]}</p>
                </div>
                <div className="w-28 h-28 p-2 mt-4 text-center text-sm border-2 rounded-lg shadow-lg">
                    <div className="w-12 h-12 mx-auto">
                        <img src="/icons/car.png" />
                    </div>
                    <p className="mt-2">{categories[index + 1]}</p>
                </div>
            </div>
        ))
    }

    return (
        <div>
            <div className="flex flex-nowrap overflow-x-auto p-4">
                {card}
                <div>
                    <div className="w-4">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard;