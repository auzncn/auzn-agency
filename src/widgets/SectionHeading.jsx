import React from 'react'

export default function SectionHeading(props) {
    const { title, subtitle } = props;
    return (
        <div>
            <h2 className='text-4xl font-black text-center'>{title}</h2>
            <p className='text-xl mt-4 text-center text-gray-500'>{subtitle}</p>
        </div>
    )
}
