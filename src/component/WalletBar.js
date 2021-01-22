import { numberWithCommas } from "../helper";

function WalletBar(props) {

    const {money, point, voucher} = props

    return (
        <div className="bg-white-900">
            <div className="shadow m-4 p-4 flex justify-center">
                <div className="flex flex-row items-center">
                    <div className="h-5 w-5 rounded-full">
                        <img src="/icons/purse.png"/>
                    </div>
                    <h1 className="ml-2">Rp{numberWithCommas(money)}</h1>
                </div>
                <div className="ml-4 flex flex-row items-center">
                    <div className="h-5 w-5 rounded-full">
                        <img src="/icons/purse.png"/>
                    </div>
                    <div className="ml-2">
                        <h1 className="text-sm">Poin</h1>
                        <h1 className="text-xs">{point} poin</h1>
                    </div>
                </div>
                <div className="ml-4 flex flex-row items-center">
                    <div className="h-5 w-5 rounded-full">
                        <img src="/icons/purse.png"/>
                    </div>
                    <div className="ml-2">
                        <h1 className="text-sm">Voucher</h1>
                        <h1 className="text-xs">{voucher} voucher</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletBar;