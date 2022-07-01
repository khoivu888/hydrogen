export default function Review(data) {
    return (
        <>
            <div className='flex'>
                <div className="rating rating-sm rating-half">
                    <input type="radio" name="rating-10" className="rating-hidden"/>
                    <input type="radio" name="rating-10" className="bg-[#FFC658] border-[#FFC658] w-[0.8rem] mask mask-star-2 mask-half-1"/>
                    <input type="radio" name="rating-10" className="bg-[#FFC658] border-[#FFC658] w-[0.8rem] mask mask-star-2 mask-half-2"/>
                    <input type="radio" name="rating-10" className="bg-[#FFC658] border-[#FFC658] w-[0.8rem] mask mask-star-2 mask-half-1"
                           checked/>
                    <input type="radio" name="rating-10" className="bg-[#FFC658] border-[#FFC658] w-[0.8rem] mask mask-star-2 mask-half-2"/>
                    <input type="radio" name="rating-10"
                           className="bg-[#FFC658] border-[#FFC658] w-[0.8rem] mask mask-star-2 mask-half-1"/>
                    <input type="radio" name="rating-10"
                           className="bg-[#FFC658] border-[#FFC658] w-[0.8rem] mask mask-star-2 mask-half-2"/>
                    <input type="radio" name="rating-10"
                           className="bg-[#FFC658] border-[#FFC658] w-[0.8rem] mask mask-star-2 mask-half-1"/>
                    <input type="radio" name="rating-10"
                           className="bg-[#FFC658] border-[#FFC658] w-[0.8rem] mask mask-star-2 mask-half-2"/>
                    <input type="radio" name="rating-10"
                           className="bg-[#FFC658] border-[#FFC658] w-[0.8rem] mask mask-star-2 mask-half-1"/>
                    <input type="radio" name="rating-10"
                           className="bg-[#FFC658] border-[#FFC658] w-[0.8rem] mask mask-star-2 mask-half-2"/>
                </div>
                <div className='ml-1 text-sm'>({data.numberReview} Reviews)</div>
            </div>

        </>

    )
}