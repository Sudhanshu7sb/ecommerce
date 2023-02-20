import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Contact = () => {
  const {isAuthenticated,user} = useAuth0();
  return (
    <section className='flex flex-col items-center space-y-5'>
      <h2 className='font-medium text-2xl my-3'>Feel Free to Contact Us !</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.26025700395!2d78.30475474175958!3d17.443971589300443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276decedf%3A0x2c12e79e6f9344e2!2sGachibowli%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1670487314503!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0 }} allowFullscreen="" loading="lazy" title="mylocation" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div>
        <form action="https://formspree.io/f/meqdylpr" method='POST' className='flex flex-col items-center space-y-3 w-[350px] my-5'>
          <input type="text" autoComplete='off' name="username" placeholder="username" required  className='p-2 w-full border-2 border-black/80' value={isAuthenticated ? user.name : ""}/>
          <input type="email" autoComplete='off' name="email" placeholder="email" required   className='p-2 w-full border-2 border-black/80' value={isAuthenticated ? user.email : ""}/>
          <textarea name="Message" id="" cols="30" rows="5" placeholder='Enter your message' className='p-2 w-full border-2 border-black/80'></textarea>

          <button type="submit" className='bg-blue-600 p-1 text-black/80 w-full'>Submit</button>

        </form>
      </div>
    </section>
  )
}

export default Contact