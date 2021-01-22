import { numberWithCommas } from "../helper";

function ProductOverviewCard(props) {

    const {name, location, price, unit} = props;

    return (
        <div className="mb-4">
            <div className="w-40 rounded-xl shadow-xl">
                <div className="h-40 bg-green-700">
                    <img className="object-cover h-full w-full rounded-xl" src="/images/1.jpg"/>
                </div>
                <div className="p-2">
                    <p className="font-bold">{name}</p>
                    <p className="text-sm">{location}</p>
                    <p className="text-sewaqu-red font-bold">Rp{numberWithCommas(price)}/{unit}</p>
                    <p>rating + terjual</p>
                </div>
            </div>
        </div>
    )
}

export default ProductOverviewCard;