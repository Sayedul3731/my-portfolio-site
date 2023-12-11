import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../../components/Navbar/Navbar';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_s9zq9rt', 'template_d71f2xr', form.current, 'IOdTvmd1AGDXBR0e5')
            .then((result) => {
                console.log(result.text);
                console.log('message sent successfully');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

     <div className='max-w-7xl mx-auto'>
        <Navbar></Navbar>
           <div className='py-20 px-2 md:px-5 md:pt-24 lg:pt-40  lg:pb-60 flex flex-col justify-center items-center'>
            <h1 className='text-3xl md:text-4xl font-bold mb-10 md:mb-16 lg:mb-20 '>Contact With Me</h1>
            <div className='bg-[#311E2D] p-10 shadow-md shadow-green-600'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" className='w-full text-black mb-5 px-3 py-2 mt-1' name="user_name" />
                <label>Your Email</label>
                <input type="email" className='w-full text-black mb-5 px-3 py-2 mt-1' name="user_email" />
                <label>Message</label>
                <textarea name="message" className='w-full text-black mb-5 px-3 py-2 mt-1' />
                <input type="submit" className='shadow-md hover:shadow-green-600 px-5 py-1 rounded-sm font-semibold cursor-pointer border' value="Send" />
            </form>
            </div>
        </div>
     </div>
    );
};

export default Contact;