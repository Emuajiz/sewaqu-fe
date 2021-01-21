import ReviewCard from "./ReviewCard";

function ReviewSlider() {
    const data = [1, 2, 3, 4]

    const card = data.map((val, i) => {
        return (
            <ReviewCard i={i} cal={val} key={i}/>
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

export default ReviewSlider;