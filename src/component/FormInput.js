function FormInput(props) {
    return (
        <input className="bg-sewaqu-gray px-4 py-4 rounded-xl text-gray-500 text-xl mt-4" placeholder={props.placeholder} name={props.name} value={props.value} />
    )
}

export default FormInput;