function Navbar(props) {
    return (
        <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
            <div className="h-6 w-6 m-2 bg-white rounded-full" onClick={props.openSideNav}></div>
            <input className="flex-1 h-6 w-6 m-2 p-2 bg-white rounded-lg" placeholder="Mau sewa apa?" />
            <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
        </div>
    )
}

export default Navbar;