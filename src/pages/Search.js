import ItemCards from "../component/ItemCards";
import RetailCard from "../component/RetailCard";
import LayoutApp from "../layouts/App";

function Search() {
    return (
        <LayoutApp>
            <p className="ml-4 mt-4">Rental</p>
            <RetailCard />
            <p className="ml-4 mt-4">Pencarian Terkait</p>
            <ItemCards />
        </LayoutApp>
    )
}

export default Search;