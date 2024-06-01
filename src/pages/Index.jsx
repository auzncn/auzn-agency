import React from 'react'
import Header from '../widgets/Header'
import Hero from '../widgets/Hero'
import Solutions from '../widgets/Solutions'
import HowItWorks from '../widgets/HowItWorks'
import Client from '../widgets/Client'
import Contact from '../widgets/Contact'
import Footer from '../widgets/Footer'

export default function Index() {
    return (
        <div className=' container mx-auto p-4'>
            <Header></Header>
            <main className=' mt-20'>
                <Hero></Hero>
                <section className='md:p-20'>
                    <Solutions></Solutions>

                </section>
                <section className='mt-20'>
                    <HowItWorks></HowItWorks>
                </section>
                <section className='mt-20 md:w-3/5 mx-auto'>
                    <Client></Client>
                </section>
                <section className='mt-20'>
                    <Contact></Contact>
                </section>
            </main>
            <Footer></Footer>
        </div>
    )
}
