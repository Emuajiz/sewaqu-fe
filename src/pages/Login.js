function Login() {
    return (
        <div className="bg-sewaqu-yellow h-screen flex flex-col justify-center px-8">
            <div className="bg-sewaqu-gray w-32 h-32 mx-auto rounded-full">

            </div>
            <p className="text-sewaqu-gray text-center text-3xl mt-4">#SemuaBisaSewa</p>
            <input className="bg-sewaqu-gray px-4 py-4 rounded-xl text-gray-500 text-xl mt-4" placeholder="Username atau Email"/>
            <input className="bg-sewaqu-gray px-4 py-4 rounded-xl text-gray-500 text-xl mt-4" type="password" placeholder="Kata sandi"/>
            <div className="flex justify-between mt-4">
                <button className="flex-1 px-4 py-4 bg-sewaqu-red text-sewaqu-gray rounded-xl text-2xl font-semibold">Daftar</button>
                <button className="flex-1 px-4 py-4 ml-4 bg-sewaqu-red text-sewaqu-gray rounded-xl text-2xl font-semibold">Masuk</button>
            </div>
            <p className="text-sewaqu-gray text-center mt-8">Lorem ipsum dolor sit amet</p>
            <p className="text-sewaqu-gray text-center underline">consectetur adipisicing elit. Placeat corrupti</p>
        </div>
    );
}

export default Login;