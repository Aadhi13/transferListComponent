import React from 'react'

export default function List(props) {
    const data = [...props.data];
    const handleToggle = props.handleToggle;

    return (
        <>
            <div className='border-2 border-black w-[60%] md:w-[30%] h-full p-4 bg-slate-200 flex flex-col justify-center gap-3'>
                {data.map((item) => {
                    return (
                        <div key={item} className='flex gap-3 text-lg items-center font-medium'>
                            <input type="checkbox" id={item} onChange={() => handleToggle(item, props.name)} />
                            <label key={item} htmlFor={item} > {item}</label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
