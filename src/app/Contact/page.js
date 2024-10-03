 "use client"
import React from 'react';


const Contact = () => {
  return (
<div className='pt-10'>

<h1 className="text-2xl font-bold mb-6 text-center">Contact details</h1>
<p className="text-2xl  mb-6 text-center">For any type of online project please don't hesitate to get in touch with me.<br />
   The fastest way is to send me your message using the following emails :stambouli.sahar.com</p>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
         
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Contact details</h1>

       


        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">
              Project  Details
            </label>
            <textarea
              id="details"
              name="details"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your message"
              rows="5"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
          <button type="button"className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  onClick={() => window.open('mailto:example@example.com?subject=Subject&body=Body')}
>
  Send
</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
  
};

export default Contact;
