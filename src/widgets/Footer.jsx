import React from 'react'
import Logo from '../assets/react.svg'

export default function Footer() {
    return (
        <footer className='grid gap-8 md:gap-0 text-gray-500 md:w-4/5 mx-auto mt-32 md:grid-cols-5'>
            <div>
                <img src={Logo} alt="" className='w-8 h-8' />
                <p>
                    <a href="#">协议</a>.<a href="#">隐私</a>
                </p>
            </div>
            {
                [1, 2, 3].map(v => (
                    <nav key={v} className='grid gap-2'>
                        <p className='text-lg text-black'>产品介绍</p>
                        {
                            [1, 2, 3, 4, 5].map(v2 => (
                                <a key={v2} href='#'>产品介绍{v2}</a>
                            ))
                        }
                    </nav>
                ))
            }
            <nav className='grid gap-2 content-start'>
                <p className='text-base text-black'>注册</p>
                <p>注册注册注册注册注册注册注册注册注册</p>
                <input type="text" className='py-2 px-3 border' placeholder='请输入您的邮箱' />
            </nav>
            <div className='col-span-full mt-12 border-t py-9 flex flex-col md:flex-row gap-4 justify-between '>
                <p>
                    由{" "}
                    <a href="https://cruip.com" className='text-blue-500'> Cruip </a>
                    {" "}
                    提供设计. All rights reserved.
                </p>
                <p className=' flex gap-4'>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-telegram"></i>
                </p>
            </div>
        </footer>
    )
}
