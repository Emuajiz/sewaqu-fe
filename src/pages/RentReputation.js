import CommonCard from "../component/CommonCard";

function RentReputation() {
    return (
        <div>
            <div className="z-20 top-0 bg-sewaqu-yellow nav flex p-4">
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
                <div className="flex-1 flex items-center text-center text-white text-2xl">
                    <h2 className="w-full">Reputasi Rental</h2>
                </div>
                <div className="h-6 w-6 m-2 bg-white rounded-full"></div>
            </div>
            <div className="p-4">
                <CommonCard classExtend="mt-2">
                    <p className="font-bold">Nama</p>
                    <p className="text-sm">Rating</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus egestas sapien, eu fringilla nibh finibus at. Aenean arcu arcu, vulputate eu purus eu, blandit convallis elit. Integer varius interdum neque quis vulputate. Duis eget ipsum tellus. Integer non arcu eu ex placerat porta. Aenean in est a elit vehicula gravida id at libero.</p>
                </CommonCard>
                <CommonCard classExtend="mt-2">
                    <p className="font-bold">Nama</p>
                    <p className="text-sm">Rating</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus egestas sapien, eu fringilla nibh finibus at. Aenean arcu arcu, vulputate eu purus eu, blandit convallis elit. Integer varius interdum neque quis vulputate. Duis eget ipsum tellus. Integer non arcu eu ex placerat porta. Aenean in est a elit vehicula gravida id at libero.</p>
                </CommonCard>
                <CommonCard classExtend="mt-2">
                    <p className="font-bold">Nama</p>
                    <p className="text-sm">Rating</p>
                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus egestas sapien, eu fringilla nibh finibus at. Aenean arcu arcu, vulputate eu purus eu, blandit convallis elit. Integer varius interdum neque quis vulputate. Duis eget ipsum tellus. Integer non arcu eu ex placerat porta. Aenean in est a elit vehicula gravida id at libero.</p>
                </CommonCard>
            </div>
        </div>
    )
}

export default RentReputation