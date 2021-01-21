function CommonCard(props) {
    return (
        <div className={"border shadow-lg rounded-xl p-2" + " " + props.classExtend}>
            {props.children}
        </div>
    )
}

export default CommonCard;