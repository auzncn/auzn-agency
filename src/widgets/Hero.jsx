import React from 'react'
import Video from '../assets/production_ID_4167404.mp4'

export default function Hero() {
    return (
        <div className='grid justify-items-center gap-8 pb-28 relative'>
            <p className='text-4xl md:text-6xl font-black text-center leading-normal'>
                打造一个完美的、现象级的、充满创造力的网站
            </p>
            <p className='text-xl text-gary-700 text-center md:w-1/2'>
                打掌合社查牛极士良。哥材近办肥片酸垂到。为送诗轻里草类免。和似束列马平它共第和。晶行且功物背置汉轴率。保却让村区风火士杀或约联。
            </p>
            <div>
                <button className=' bg-blue-600 rounded px-8 py-3 text-white'>立即试用</button>
                <button className=' bg-gray-900 rounded px-8 py-3 text-white ml-3'>了解更多</button>
            </div>
            <div className='relative w-full'>
                <svg
                    width="256"
                    height="256"
                    viewBox="0 0 256 256"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 -z-10"
                >
                    <circle cx="128" cy="128" r="128" fill="url(#paint0_linear_0_22)" />
                    <defs>
                        <linearGradient
                            id="paint0_linear_0_22"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="256"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="0.774017" stopColor="#EAEAEA" />
                            <stop offset="1" stopColor="#DFDFDF" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <div className='relative grid justify-items-center'>
                <video src={Video}
                    controls
                    className='w-[768px] h-[432px] object-cover object-top rounded' />
                <div className='absolute bg-white rounded-full
                    px-5 py-4 drop-shadow-xl -bottom-7'><i className="fa-regular fa-circle-play inline mr-3"></i>
                    查看2分钟演示视频
                </div>
            </div>
            <svg
                width="128"
                height="128"
                viewBox="0 0 128 128"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute buttom-0 md:bottom-20 -left-10 -z-10"
            >
                <circle cx="64" cy="64" r="64" fill="url(#paint0_linear_0_23)" />
                <defs>
                    <linearGradient
                        id="paint0_linear_0_23"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="128"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="white" />
                        <stop offset="0.774017" stopColor="#EAEAEA" />
                        <stop offset="1" stopColor="#DFDFDF" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}
