function SideNav(props) {

    const setWidth = () => {
        if (props.hidden)
            return {
                display: "none",
                width: "0px"
            }
        return {
            width: "300px"
        }
    }

    return (
        <div className="z-50 h-full absolute bg-sewaqu-gray p-4 transition" style={setWidth()}>
            <div className="text-3xl text-right">
                <button className="font-bold" onClick={props.closeSideNav}>X</button>
            </div>
            <div>
                <button className="font-bold text-2xl ml-2">Login</button>
            </div>
            <div>
                <button className="font-bold text-2xl ml-2 mt-4">Register</button>
            </div>
        </div>
    )
}

export default SideNav;