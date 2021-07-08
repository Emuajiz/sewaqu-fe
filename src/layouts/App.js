import { useState } from "react";
import OverlayScreen from "../component/OverlayScreen";
import SearchBar from "../component/SearchBar";
import SideNav from "../component/SideNav";

function App(props) {

    const [isHiddenSideNav, setIsHiddenSideNav] = useState(true);

    const openSideNav = () => {
        setIsHiddenSideNav(false);
    }

    const closeSideNav = () => {
        setIsHiddenSideNav(true);
    }

    return (
        <div className="bg-sewaqu-gray">
            <SideNav hidden={isHiddenSideNav} closeSideNav={closeSideNav} />
            <OverlayScreen hidden={isHiddenSideNav} closeSideNav={closeSideNav} />
            <SearchBar openSideNav={openSideNav} cart={true}/>
            <div className={(isHiddenSideNav ? "" : "fixed w-full overflow-y-scroll")}>
                {props.children}
            </div>
        </div>
    )
}

export default App;