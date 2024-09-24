import React from 'react'

interface MyComponentProps {
    params : {
        username: string;
    }
}

const Username : React.FC<MyComponentProps>  = ({params}) => {
  return (

  <>
    <div className='flex flex-col justify-center items-center '>

      <div className='h-full w-screen conver '>
        <img className='object-cover w-full h-[44vh] ' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/688268/8628ef60983c4806867cccd45545ce07/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/10.jpeg?token-time=1728000000&token-hash=6dSk3hY9RKbXsP70-WzvWwT4M30RiubhS0PWfHLSDF0%3D" alt="lemon" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-full'>
          <img className='object-cover rounded-full' width={185} height={185} src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/688268/8628ef60983c4806867cccd45545ce07/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/10.jpeg?token-time=1728000000&token-hash=6dSk3hY9RKbXsP70-WzvWwT4M30RiubhS0PWfHLSDF0%3D" alt="" />
        </div>
      </div>

      <div className='flex justify-center items-center  my-[10vh] flex-col gap-2'>
        <div className='font-bold text-3xl text-white'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          Creating a podcast with ben avery, devan costa and jace avery
        </div>
        <div className='text-slate-400'>
          8,606 members . 280 posts . $35,080/month
        </div>  
      </div>

      <div className='payment flex  gap-5 w-[80%] mt-10'>
        <div className='supporters w-1/2 bg-slate-800 rounded-lg p-10 text-white'>
          <h2 className='text-2xl text-center font-bold my-5'>Supporters</h2>
          <ul>
            <li className='my-2'>someone donted $some wiht a message blah...</li>
            <li className='my-2'>someone donted $some wiht a message blah...</li>
            <li className='my-2'>someone donted $some wiht a message blah...</li>
            <li className='my-2'>someone donted $some wiht a message blah...</li>
            <li className='my-2'>someone donted $some wiht a message blah...</li>
            <li className='my-2'>someone donted $some wiht a message blah...</li>
            <li className='my-2'>someone donted $some wiht a message blah...</li>
            <li className='my-2'>someone donted $some wiht a message blah...</li>
          </ul>
        </div>

        <div className='makepayment w-1/2 bg-slate-800 rounded-lg p-10 text-white '>
            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <div className='flex gap-2 py-5 flex-col'>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-700' placeholder='Enter Name'/>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-700' placeholder='Enter Message'/>
              <input type="text" className='w-full p-3 rounded-lg bg-slate-700' placeholder='Enter Amount'/>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Pay
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-center items-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
              </button>
            </div>

            <div className='flex gap-3'>
              <button className='bg-slate-700 p-3 rounded-lg'>Pay $10</button>
              <button className='bg-slate-700 p-3 rounded-lg'>Pay $20</button>
              <button className='bg-slate-700 p-3 rounded-lg'>Pay $50</button>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Username
