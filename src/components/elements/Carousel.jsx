import React from "react";

export default function Carousel(product) {
    return (
        <>
            <div className='font-bold px-5 mt-10'>Gift Collection</div>
            <div className="carousel carousel-center rounded-box mt-5 px-5">
                {product.feedBack.map((feedBack, index) => (
                    <div key={index} className="carousel-item w-3/4 md:w-1/5">
                        <div className='card mr-3 shadow-xl rounded-none justify-items-center'>
                            <figure className='w-full'>
                                <img className='w-full md:h-[435px] h-[253px]' src={feedBack.src}/>
                            </figure>
                            <div className='items-center bg-white md:hidden block hover:block text-center px-3 mt-2'>
                                <div className="rating rating-md text-center">
                                    <input type="radio" name={`rating-${feedBack.id}`} className="mask mask-star-2 bg-orange-400"/>
                                    <input type="radio" name={`rating-${feedBack.id}`} className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name={`rating-${feedBack.id}`} className="mask mask-star-2 bg-orange-400"/>
                                    <input type="radio" name={`rating-${feedBack.id}`} className="mask mask-star-2 bg-orange-400"/>
                                    <input type="radio" name={`rating-${feedBack.id}`}
                                           className="mask mask-star-2 bg-orange-400 checked"/>
                                </div>
                                <div className='mt-2 font-bold text-sm'>{feedBack.title}</div>
                                <div className='font-light text-xs'>{feedBack.comment}</div>
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </>
    )
}