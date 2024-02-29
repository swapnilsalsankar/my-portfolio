import React from 'react'
import {HiDownload} from 'react-icons/hi'
import ReactImg from '../assets/swapnil2.jpeg';

function Home() {
  return (
<div name='home' className=' w-full h-screen  '>
  <div name="home" class="max-w-[1000px] w-full max-h-[100%] sm:flex sm:flex-row justify-center items-center mx-auto gap-5 ">
    <div class="w-full h-screen md:max-w-[750px] text-left">
      <div class="max-w-[1000px] flex flex-col justify-center h-full mx-8 sm:ml-8">
        <p class="text-[#1e3751]">Hi, I am</p>
        <h1 class="text-4xl md:text-7xl font-bold text-[#1e3751] mb-2">Swapnil Salsankar</h1>
        <h6 class="text-2xl md:text-3xl font-bold text-[#6a7280] max-w-[800px]">Cloud and DevOps Enthusiast: Unleashing AWS Power!</h6>
        <p class="text-[#6a7280] py-4 max-w-[700px]">With a relentless passion for innovation, I specialize in architecturing robust infrastructures and streamlining deployment pipelines to ensure the seamless delivery of applications in cloud environments. 
         My expertise lies in orchestrating scalable solutions and leveraging automation tools to optimize system performance and reliability. Through collaborative efforts with cross-functional teams, I strive to drive excellence in software delivery and infrastructure management.
         Explore my portfolio to discover how I combine my skills in DevOps and cloud technologies to create efficient and scalable solutions.</p>
        {/* <div className=''>
          <a download={resume} href="https://drive.google.com/file/d/1YwP_H_9X_tM7gxIhLoeAGb3sjojHavnD/view?usp=sharing"></a>
          <button className='text-white bg-[#C3073F]  group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1e3751] hover:border-[#1e3751]'>
            Resume
            <span className='group-hover:rotate-90-left duration-300'>
              <HiDownload className='ml-3 ' />
            </span>
          </button>
        </div> */}
      </div>
    </div>
    <div class="hidden sm:block lg:w-[450px] lg:h-[420px] md:w-[350px] md:h-[350px] sm:w-[250px] sm:h-[250px] rounded-full overflow-hidden mx-8 sm:mr-8">
      <img className='object-cover h-[100%] w-[100%]' src={ReactImg} alt="Profile" />
    </div>
  </div>
</div>
  )
}

export default Home



