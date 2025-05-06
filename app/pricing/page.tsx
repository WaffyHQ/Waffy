"use client"
import React from 'react'
import Navbar from '../_components/Navbar'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Layers } from "lucide-react"

import { Button } from "@/components/ui/button"
function Pricing() {
  const [annual, setAnnual] = React.useState(true);
  const [monthly, setMonthly] = React.useState(false);
  const pricingPlans = [{
    name: "Basic",
    price: 5,
    credits: 600,
    details: ["Limited messages", "Unlimited prompts", "messages"],
  },
  {
    name: "Pro",
    price: 10,
    credits: 1200,
    details: ["Limited messages", "Unlimited prompts", "messages","Top queue priority","Community support"],
  },
  {
    name: "Enterprise",
    price: 20,
    credits: 2400,
    details: ["Unlimited messages", "Unlimited prompts", "messages","Top queue priority","Community support"],
  },
  {
    name: "Ultimate",
    price: 50,
    credits: 6000,
    details: ["Unlimited messages", "Unlimited prompts", "messages","Top queue priority","Community support","Technical support"],
  }
]
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col ">
      <Navbar />
      <main className="flex-grow px-5" >
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-2xl md:text-4xl font-bold text-white mt-10 md:mt-20 mb-5'>
            Choose Your <span className='text-green-500'>Plan</span>
          </h1>
          <p className='text-md font-mono'>For enterprise that need large and more, please contact us.</p>
        </div>
        <div className='flex flex-col items-center justify-center mt-10 overflow-x-auto'>
          <Menubar className='rounded border-green-500'>
            <MenubarMenu>
              <MenubarTrigger className={`transition-all cursor-pointer duration-500 ease-in-out ${annual ? 'rounded bg-gray-600/60' : ''}`} onClick={()=>{ setAnnual(true);setMonthly(false)}}>Annual</MenubarTrigger>
              <MenubarTrigger className={`transition-all cursor-pointer duration-500 ease-in-out ${monthly ? 'rounded bg-gray-600/60' : ''}`} onClick={()=>{ setAnnual(false);setMonthly(true)}}>Monthly</MenubarTrigger>
            </MenubarMenu>
          </Menubar>
          <div className="mt-10 overflow-x-auto w-full h-full px-4 mb-30">
          <div className="flex flex-row gap-10 items-center md:w-full h-full w-max pr-4 justify-center">
         {pricingPlans.map((plan, index) => (
               <div key={index} className=' w-fit md:w-1/6 h-[50vh] mb-30 md:overflow-hidden overflow-y-scroll md:h-[50vh]  backdrop-filter backdrop-blur-sm bg-black rounded-lg transform shadow-[0_20px_50px_rgba(0,_200,_83,_0.5)] border-green-500 border-5 flex flex-col md:flex-col sm:gap-10 gap-5 md:gap-10 p-5'>  
                <div className='m-0'>
                  <h1 className='md:text-4xl text-2xl mx-auto mb-3 font-semibold text-yellow-500 border-gray-300'>{plan.name}</h1>
                  {annual ? <p className='text-xl md:text-2xl'><span className='text-3xl md:text-5xl font-bold'>${plan.price*12}</span>.0/Anuual</p> : <p className='text-xl md:text-2xl'><span className='text-3xl md:text-5xl font-bold'>${plan.price}</span>.0/Month</p>}
                 </div>
                 <div className='flex items-center m-0 justify-center'>
                   <Button className='border-green-600 m-0 border mx-auto w-48 rounded-lg hover:shadow-[-10px_-10px_30px_4px_rgba(0,255,100,0.1),_10px_10px_30px_4px_rgba(0,255,100,0.15)]
 cursor-pointer'>Subscribe</Button>
                
                 </div>
  
                <div>
                  {annual ? <h1 className='text-xl md:text-2xl font-semibold md:mb-12 mb-2 text-yellow-400 '>{plan.credits * 12} credits Annual</h1> : <h1 className='text-xl md:text-2xl font-semibold md:mb-12 mb-2 text-yellow-400 '>{plan.credits} credits monthly</h1>}
                  
                   
                    {plan.details.map((detail, i) => (
                      <div key={i} className='flex flex-row items-center gap-2'>
                    <Layers size={20} /> 
                  <p className='text-sm md:text-md font-mono'>{detail}</p>
                  </div>
                ))}
                  
                   {/* <div className='flex flex-row items-center gap-2'>
                    <MessageSquare />
                    <p className='text-md font-mono'>Unlimited prompts</p>
                  </div>
                   <div className='flex flex-row items-center gap-2'>
                    <MessageSquare />
                    <p className='text-md font-mono'> messages</p>
                  </div> */}
                  </div>
              </div>
              
              
          
          ))}
          </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Pricing