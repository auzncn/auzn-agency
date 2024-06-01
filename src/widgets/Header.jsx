import React from 'react'

export default function Header() {
    return (
        <header  className='flex justify-between items-center h-20'>
            <i className="fa-solid fa-tent"></i>
            <nav className='flex items-center'>
                <a href="#">登录</a>
                <a href="#" className='ml-8 bg-gray-900 px-4 py-2 rounded 
                text-blue-50 flex items-center'>
                    注册
                    <i className="fa-solid fa-arrow-right inline ml-3" />
                </a>
            </nav>
        </header >
    )
}
