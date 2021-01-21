import FormInput from "../component/FormInput";

function Register() {
    return (
        <div className="bg-sewaqu-yellow h-screen flex flex-col justify-center px-8">
            <div className="bg-sewaqu-gray w-32 h-32 mx-auto rounded-full">

            </div>
            <p className="text-sewaqu-gray text-center text-3xl mt-4">#SemuaBisaSewa</p>
            <FormInput placeholder="Email" />
            <FormInput placeholder="Username" />
            <FormInput placeholder="Kata Sandi" />
            <FormInput placeholder="Konfirmasi Kata Sandi" />
            <p className="text-sewaqu-gray text-center mt-4">Lorem ipsum dolor sit amet</p>
            <p className="text-sewaqu-gray text-center underline">consectetur adipisicing elit. Placeat corrupti</p>
            <button className="px-4 py-4 mt-4 bg-sewaqu-red text-sewaqu-gray rounded-xl text-2xl font-semibold">Daftar</button>
        </div>
    );
}

export default Register;