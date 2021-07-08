function SearchBar(props) {

    const cartIconShow = (trigger) => {
        if (trigger)
            return (
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            )
        return ""
    }

    return (
        <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
            <div className="h-6 w-6 m-2 bg-white rounded-full" onClick={props.openSideNav}></div>
            <input className="flex-1 h-6 w-6 m-2 p-2 bg-white rounded-lg" placeholder="Mau sewa apa?" />
            {cartIconShow(props.cart)}
            <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
        </div>
    )
}

export default SearchBar