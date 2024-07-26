import React from 'react'

function Footer() {
  return (
    <div className='relative  w-full h-[60vh] text-white dark:text-black flex px-10 py-10 lg:h-screen'>
        <div className='w-1/2   '>
          <div className='text-[6vw] leading-[6vw] -tracking-[0.1em] font-["Segoe UI Symbol"]'>
             <p>EYE-</p>
             <p>OPENING</p>
          </div>
          <div className='absolute top-[82%] left-8 text-[4vw] '>
            <p>JOY</p>
          </div>
        </div>
        <div className='w-1/2 px-10 py-8 relative '>
          <div className=''>
            <p className='text-[6vw] leading-[2vw]  font-["Segoe UI Symbol"] -tracking-[0.1em]'>PRESENTATIONS</p>
            <div className='px-2 py-10'>
                  {[
                     {name:"S:"},
                     { name: "GitHub", link: "https://github.com/obidulHaque" },
                     { name: "YouTube", link: "https://www.youtube.com/channel/UCHnMFuu-ek3I7jtQfLWQhqw" },
                     { name: "Linkedin", link: "https://www.linkedin.com/in/md-obidul-haque-3ba641255/" }
                   ].map((items,index)=>(
                    <a className={`block ${index===1 && "mt-8"} ${index===0 && "mt-10"} underline`} href={items.link} key={index}>{items.name} </a>
                  ))}
            </div>
                
         </div>
         <div className='absolute top-[90%] left-8 flex text-zinc-400 text-[1.5vw]'>
              <p>&copy;JOY design 2024.</p>
              <p className='underline'>legal Trems</p>
         </div>
         <div className='absolute top-[90%] left-[80%] text-zinc-400 text-[1.5vw]'>
           <p>Website by Obidul Haque</p>
         </div>
       </div>
    </div>
  )
}

export default Footer