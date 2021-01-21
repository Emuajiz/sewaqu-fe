function RetailCard() {

    const data = [1,2,3,4]

    const card = data.map((val, i) => {
        return (
            <div className={i ? "ml-4" : ""} key={i}>
                <div className="w-48 h-16 bg-green-400">{val}</div>
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

export default RetailCard;