import React from 'react'
import Title from '../component/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../component/NewsLetterBox'

const About = () => {
  return (
    <div className='border-t pt-12'>

      <div className=' text-2xl'>
        <Title Title1={"ABOUT"} Title2={"US"} />
      </div>

      <div className='my-10 flex flex-col md:flex-row  gap-10'>
        {/* <div className="left_about "> */}
          <img src={assets.about_img} alt="" className='w-full md:max-w-[450px] ' />
    
        <div className="right_about  flex flex-col mt-20 gap-4  md:w-2/4 text-gray-600">
          <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
          <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
          <b className='text-gray-800 text-xl'>Our Mission</b>
          <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>


      <div className='text-2xl py-10 flex justify-start'>
        <Title Title1={"WHY"} Title2={"CHOOSE US"} />
      </div>

      <div className='flex flex-col   gap-5 lg:flex-row  mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col  '>
          <b>Quality Assurance:</b>
          <p className='text-gray-500'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col  '>
          <b>Convenience:</b>
          <p className='text-gray-500'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col  '>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-500'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsLetterBox/>

    </div>
  )
}

export default About
