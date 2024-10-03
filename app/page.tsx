import CardSpotlight from "@/components/ui/CardSpotlight";

export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center ">
      
        <div className="flex justify-center flex-col items-center gap-4 text-white h-[42vh] bgwhite" >
        <div className="font-bold text-3xl"> Fuel the Creators</div>
        <p>
          Support your favorite developers with a cup of coffee
        </p>

        <div>
          <button type="button" className="text-white bg-gradient-to-br from-[#33f] to-[#131363] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
        </div>
        <div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#33f]  to-[#131363] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Read More
          </span>
        </button>
        </div>
    </div>

    <div className="flex justify-center flex-col items-center gap-10 mb-10">
      <CardSpotlight>    
        <div className='text-sm text-gray-200 flex flex-col justify-center text-center'>
          <p className='text-sm'>SUPPORT</p>
          <h2 className='text-5xl font-bold' >Give your audience</h2>
          <h2 className='text-5xl font-bold'>an easy way to say thanks.</h2>
          <p className='text-lg'>Buy Me a Coffee makes supporting fun and easy. In just a couple of taps, your fans </p>
          <p className='text-lg'>can make the payment (buy you a coffee) and leave a message. </p>
        </div>  
      </CardSpotlight>

      <CardSpotlight>     
          <div className='text-md bg-gradient-to-t from-gray-400 to-white bg-clip-text font-bold text-transparent  flex flex-col justify-center text-center'>
            <p className='text-sm'>POSTS, AUDIO & EMAIL</p>
            <h2 className='text-5xl font-bold' >Publish your best work</h2>
            <p className='text-lg'>Buy Me a Coffee makes it easy to publish free and exclusive content. Try different</p>
            <p className='text-lg'>formats such as audio, and make it members-only to drive more memberships. </p>
          </div>  
      </CardSpotlight>

      <CardSpotlight>
        <div className='text-sm text-gray-200 flex flex-col justify-center text-center '>
          <p className='text-sm'>SHOP</p>
          <h2 className='text-5xl font-bold' >Introducing Shop,</h2>
          <h2 className='text-5xl font-bold'>the creative way to sell.</h2>
          <p className='text-lg'>The things you woudd like to sell probably do not belong in a Shopify store. Shop is </p>
          <p className='text-lg'>designed from the ground up with creators in mind. Whether it’s a 1-1 Zoom call, art</p>
          <p className='text-lg'>commissions, or an ebook, Shop is for you.</p>
        </div>
      </CardSpotlight>
    </div>
    </div>
  );
}
