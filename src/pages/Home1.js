import { Link } from "react-router-dom";
import LayoutApp from "../layouts/App";

const { default: AdsCarousel } = require("../component/AdsCarousel");
const { default: CategoryCard } = require("../component/CategoryCard");
const { default: ItemCards } = require("../component/ItemCards");
const { default: WalletBar } = require("../component/WalletBar");

function Home1() {

    const data = {
        money: 100000,
        point: 5000,
        voucher: 5,
    }

    return (
        <LayoutApp>
            <AdsCarousel />
            <WalletBar {...data} />
            <div className="flex">
                <p className="ml-4 mt-4 flex-1">Kamu mau sewa apa nih?</p>
                <Link to="/category">
                    <p className="mx-4 mt-4">lihat semua</p>
                </Link>
            </div>
            <CategoryCard />
            <p className="ml-4 mt-4">Rekomendasi</p>
            <ItemCards />
        </LayoutApp>
        // <div className="bg-sewaqu-gray">
        //     <SideNav hidden={isHiddenSideNav} closeSideNav={closeSideNav}/>
        //     <OverlayScreen hidden={isHiddenSideNav} />
        //     <Navbar openSideNav={openSideNav}/>
        // </div>
    )
}

export default Home1;