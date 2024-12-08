import React from 'react'

const Footer = () => {
  return (
    <div>
        <div>
            <div className='w-[1100px] flex justify-around mx-20'>
                <div className='flex items-center justify-center'>
            <p className='w-[285px] h-[72px] text-[#9F9F9F] font-normal'>
            400 University Drive Suite 200 Coral Gables,
            FL 33134 USA
            </p>
            </div>
            <div className='flex flex-col gap-8'>
                <p className='text-[#9F9F9F] font-medium'>Links</p>
                <p  className='text-black font-medium'>Home</p>
                <p  className='text-black font-medium'>Shop</p>
                <p  className='text-black font-medium'>Blogs</p>
                <p  className='text-black font-medium'>Contact</p>
            </div>
            <div className='flex flex-col gap-8'>
                <p className='text-[#9F9F9F] font-medium'>Help</p>
                <p  className='text-black font-medium'>Payment Options</p>
                <p  className='text-black font-medium'>Returns</p>
                <p  className='text-black font-medium'>Privacy Policies</p>
            </div>
            <div className='flex flex-col gap-8'>
                <p className='text-[#9F9F9F] font-medium'>Newsletter</p>
                <div>
                <pre className='w-fit h-16 border-black border-b-[1px] text-[#9F9F9F] pb-2 font-sans inline mr-5 cursor-pointer'>Enter Your Email Address        </pre>
                <span className='w-fit h-16 border-black border-b-[1px] pb-2 cursor-pointer'>SUBSCRIBE</span>
                </div>
            </div>
            </div>
            <div className='w-[1100px] h-20 border-t-[1px] border-[#D9D9D9] my-10 mx-auto'>
                <p className='pt-10'>2022 Meubel House. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer