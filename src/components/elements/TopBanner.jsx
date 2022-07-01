import React from "react";

export default function TopBanner(data) {
    return (
        <div className='bg-[#F8CAD0] text-center pt-2 pb-2'>
            Order {data.numberItem}+ and save {data.percentSave}% with code: {data.couponCode}
        </div>
    )
}