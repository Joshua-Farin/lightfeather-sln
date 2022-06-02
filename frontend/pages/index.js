import { useState, useEffect } from "react";

function Home({ supervisors }) {


  const [names, setName] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8080/api/supervisors')
      const data = await response.json()
      setName(data)
    }
    fetchData()
  }, [])
    
  return (
      
    <div>
        <header className='flex justify-center bg-[#6B8085] py-2'>
          <h1 className='font-semibold text-2xl'>Notification Form</h1>
        </header>

      {/* Body */}
        <form className='grid items-center  w-screen h-screen px-10 bg-[#C7D2D7] ' action='/api/submit' method='post'>
          
          {/* Left */}
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
            <div className='grid  items-center float-left mr-5'>
              <label className='py-2 text-[#71848A]' htmlFor="first">First Name</label>
              <input className='h-8' type="text" id="first" name="first" />
            </div>
            <div className='grid float-left mr-5'>
              <label className='py-2 text-[#71848A]' htmlFor="email">Email</label>
              <input className='h-8' type="text" id="email" name="email" />
            </div>
          </div>

          {/* Right */}
          <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
            <div className='grid float-left mr-5'>
              <div className='py-2'>
                <input type='checkbox'></input>
                <label className='py-2 px-2 text-[#71848A]' htmlFor="last">Last Name</label>
              </div>
              <input className='h-8' type="text" id="last" name="last" />
            </div>
            <div className='grid float-left mr-5'>
              <div className='py-2'>
                <input className='' type='checkbox'></input>
                <label className='py-2 px-2 text-[#71848A]' htmlFor="phone">Phone Number</label>
              </div>
              <input className='h-8' type="text" id="phone" name="phone" />
            </div>
          </div>
          
         {/* Bottom */}
         <div className='grid'>
            <label className='py-2 text-[#71848A]' htmlFor='supervisor'>Supervisor</label>
            <select className='w-full py-2 px-2 rounded-lg text-xl text-[#71848A]' id='selectNumber' name='supervisor' required>
              <option value="">Select...</option>
              {names.map((name) => 
                <option key={name.supervisor}>{name.supervisor}</option>
              )}
            </select>  
         </div>
         
         
          <div className='grid'>
            <button className='py-10 rounded-lg text-white bg-[#6E8288]' type='submit'>Submit</button>
          </div>

        </form>
    </div>
  )
} 
export default Home;






