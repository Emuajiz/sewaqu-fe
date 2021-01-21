function CategoryCard() {
    const data = [1, 2, 3, 4, 5]
    const card = data.map((val, i) => {
        return (
            <div className={i ? "ml-4" : ""} key={i}>
                <div className="w-28 h-28 p-2 bg-green-400 text-center text-sm">
                    <div className="w-12 h-12 bg-green-700 mx-auto">

                    </div>
                    <p className="mt-2">Perlengkapan Anak</p>
                </div>
                <div className="w-28 h-28 p-2 mt-4 bg-green-400 text-center text-sm">
                    <div className="w-12 h-12 bg-green-700 mx-auto">

                    </div>
                    <p className="mt-2">Perlengkapan Anak</p>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="flex flex-nowrap overflow-x-auto px-4">
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