import React from 'react'

import ProductOverviewCard from "./ProductOverviewCard";

function ItemSlider() {
    const data = [1, 2, 3, 4]

    const card = data.map((val, i) => {
        return (
            <React.Fragment key={i}>
                <ProductOverviewCard val={val}/>
                <div>
                    <div className="w-4">

                    </div>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div>
            <div className="flex flex-nowrap overflow-x-auto px-4">
                {card}
            </div>
        </div>
    )
}

export default ItemSlider;