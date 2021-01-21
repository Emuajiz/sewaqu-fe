function OverlayScreen(props) {
    return (
        <div className={(props.hidden ? "hidden " : "opacity-50 ") + "bg-black absolute w-full h-full z-30 transition"} onClick={props.closeSideNav}>

        </div>
    )
}

export default OverlayScreen;