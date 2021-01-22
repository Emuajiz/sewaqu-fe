import ProductOverviewCard from "./ProductOverviewCard"

function ItemCards() {

    const data = [
        {
            name: "Mobil Avanza + Driver",
            location: "Kota bandung",
            price: 300000,
            rating: 5,
            unit: "hari"
        },
        {
            name: "Mobil Avanza + Driver",
            location: "Kota bandung",
            price: 300000,
            rating: 5,
            unit: "hari"
        },
        {
            name: "Mobil Avanza + Driver",
            location: "Kota bandung",
            price: 300000,
            rating: 5,
            unit: "hari"
        },
    ]

    const cards = data.map((val, i) => {
        return (
            <ProductOverviewCard key={i} {...val} />
        )
    })

    console.log(data.length)

    const adder = () => {
        if (data.length % 2) {
            return (
                <div className="w-40 mb-4" key={data.length + 1}>
                    <div style={{ height: "200px" }} >
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="flex flex-wrap justify-evenly">
            {cards}
            {adder()}
        </div>
    )
}

export default ItemCards;