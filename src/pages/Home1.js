import LayoutApp from "../layouts/App";

const { default: AdsCarousel } = require("../component/AdsCarousel");
const { default: CategoryCard } = require("../component/CategoryCard");
const { default: ItemCards } = require("../component/ItemCards");
const { default: WalletBar } = require("../component/WalletBar");

function Home1() {

    return (
        <LayoutApp>
            <AdsCarousel />
            <WalletBar />
            <div className="flex">
            <p className="ml-4 mt-4 flex-1">kategori</p>
            <p className="mx-4 mt-4">lihat semua</p>
            </div>
            <CategoryCard />
            <p className="ml-4 mt-4">req?</p>
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