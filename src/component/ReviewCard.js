function ReviewCard(props) {
    return (
        <div className={props.i ? "ml-4" : ""}>
            <div className="w-52 h-16 bg-green-400">
                <p>nama</p>
                <p>rating</p>
                <p>komen</p>
            </div>
        </div>
    )
}

export default ReviewCard;