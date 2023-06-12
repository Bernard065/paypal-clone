import React, { useState } from 'react'
import { subHero } from '../../data/data'

const SubHero = () => {
    const [cards] = useState(subHero)
  return (
    <>
        <div className='bg-slate-100 text-center px-8 py-6 text-lg lg:text-xl text-slate-700 flex flex-col md:flex-row items-center justify-center gap-3'>
            Looking for PayPal for business or freelance needs?{" "}
            <button className='border-2 border-blue-600 text-base px-3 py-1 rounded-full'>
                Explore Business Solutions
            </button>
        </div>
        <section className='px-8 py-10 lg:pb-20'>
            <h2 className='text-center mb-8 text-2xl font-light lg:text-5xl text-slate-700'>Paypal is for everyone who pays or gets</h2>
           <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto text-center'> 
                    {cards.map((card, index) => (
                        <article>
                            <img src={card.image} alt={card.title} 
                            className='mx-auto'
                            />
                            <h4 className='text-lg my-6 text-slate-700'>{card.title}</h4>
                            <p className='mb-g'>{card.desc}</p>
                            <button className='border border-blue-600 text-base p-3 rounded-full w-full mt-5 font-bold'>{card.button}</button>
                    </article>
                    ))}
                    
                </div>
           </div>
        </section>
    </>
  )
}

export default SubHero