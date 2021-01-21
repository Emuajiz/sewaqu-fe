function BottomBar() {
    return (
        <div className="fixed bottom-0 w-full p-2 bg-black">
            <div className="flex">
                <div className="w-12 rounded-md px-2 py-1 bg-blue-200">
                    <img className="" src="/icons/back.png" />
                </div>
                <div className="w-12 ml-2 rounded-md px-2 py-1 bg-blue-200">
                    <img className="" src="/icons/back.png" />
                </div>
                <div className="text-center ml-2 flex-1 flex items-center justify-center rounded-md px-4 py-1 bg-blue-200">
                    <p>sewa gan</p>
                </div>
            </div>
        </div>
    )
}

export default BottomBar;