import React, {useState} from "react";


export default function Tags() {
    const [activeTag, setActiveTag] = useState('valentine gift')
    const tagItem = ['valentine gift', 'mama', 'girl friend', 'gift', 'baba','Grandma','mug','husband','dog','cat','wife','t-shirt','Grandpapa']

    return (
        <>
            <div className='font-bold'>Tag</div>
            <div className='mt-3'>
                {tagItem.map((tag, index) => (
                    <div key={index} onClick={() => {
                        setActiveTag(tag)
                    }} className={activeTag === tag ? 'btn normal-case mt-2 btn-sm mr-2 bg-primary border-none' :
                        'btn text-[#AAAAAA] normal-case btn-sm mr-2 mt-2 bg-[rgba(35,31,32,0.05)] border-none'}>{tag}</div>
                ))}
            </div>
        </>
    )
}