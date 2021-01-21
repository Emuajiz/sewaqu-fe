function ProductOverviewCard(props) {
    return (
        <div className="mb-4">
            <div className="w-40 bg-green-400">
                <div className="h-40 bg-green-700">
                    {props.val || 1}
                </div>
                <div className="p-2">
                    <p>Nama</p>
                    <p className="text-sm">kota</p>
                    <p>harga</p>
                    <p>rating + terjual</p>
                </div>
            </div>
        </div>
    )
}

export default ProductOverviewCard;