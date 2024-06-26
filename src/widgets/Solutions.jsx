import React from 'react';
import SectionHeading from './SectionHeading';
import Image from '../assets/pexels-photo-8348457.jpg';

export default function Solutions() {
    return (
        <div>
            <SectionHeading title='解决方案'
                subtitle='解决方案解决方案解决方案解决方案解决方案解决方案解决方案' />
            <div className='grid lg:grid-cols-2 mt-20 gap-20'>
                <div>
                    <h3 className='mt-7 text-[30px] md:text-[32px] font-bold'>强有力的工具</h3>
                    <p className='mt-4 mb-8 text-gray-500'>
                        强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具强有力的工具
                    </p>
                    <ul className='grid gap-3'>
                        {
                            [1, 2, 3].map((v) => (
                                <li className={`p-5 justify-between rounded border border-zinc-100
                                ${v === 1 && 'bg-zinc-100'} `} key={v}>
                                    <p className='text-base lg:text-lg font-bold'>构建简单的生态系统</p>
                                    <div className='flex justify-between relative'>
                                        <p className='text-base lg:text-lg leading-7 mt-1'>
                                            构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统构建简单的生态系统
                                        </p>
                                        <i className="fa-solid fa-bolt-lightning inline ml-8 relative -top-2"></i>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <img src={Image} alt="" />
            </div>
        </div>
    )
}
