import { useState } from "react";
import OverlayScreen from "../component/OverlayScreen";
import SideNav from "../component/SideNav";

const { default: Navbar } = require("../component/Navbar");

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
            <Navbar openSideNav={openSideNav} />
            <div className={(isHiddenSideNav ? "" : "fixed w-full overflow-y-scroll")}>
                {props.children}
            </div>
        </div>
    )
}

export default App;