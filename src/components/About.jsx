import React from 'react'
import ReactImg from '../assets/swapnil1.jpeg';

function About() {
  return (
    <div name="about" className='w-full  '>
      <div class="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
        <div>
          <p class="text-4xl font-bold border-b-4 border-pink-600 inline">About</p>
        </div>
        <div class="max-w-[1000px] w-full sm:flex sm:flex-row sm:justify-center sm:items-center sm:mx-auto gap-2">
          <div class="hidden sm:block lg:w-[500px] lg:h-[500px] md:w-[200px] md:h-[200px] sm:w-[150px] sm:h-[150px] rounded-full overflow-hidden mx-8 sm:mr-8">
             <img className='object-cover h-[100%] w-[100%]' src={ReactImg} alt="Profile" />
          </div>
            <div class="w-full md:max-w-[950px] text-left">
              <div class="max-w-[1000px] flex flex-col justify-center h-full sm:mx-8 sm:ml-8">
              <p class=" text-[#6a7280] py-4 ">I am Swapnil Salsankar pursuing my Master in Information Systems from Northeastern University in Boston. Prior to my master's, I earned a Bachelor degree in Computer Science from Acropolis Institute of Technology & Research in Indore, India. I have 3 years of work experience as a Software Engineer at Tech Mahindra Limited leading Agile teams, fostering collaboration, and delivering critical features on time </p>
              <p class=" text-[#6a7280] py-4 ">I possess wide  range of technical skills across languages like  Python, Golang, C, C++. In terms of web technologies, I am familiar with HTML, CSS, Node.js, Typescript and more. Furthermore I have hands-on on various  toolset such as  Visual Studio Code, IntelliJ and various AWS services. Skilled in DevOps practices including Kubernetes, Terraform, Ansible. Additionally, I have experience with databases such as MySQL, MongoDB, PostgreSQL and operating systems like Windows, Linux, macOS, Unix. </p>
              <p class="text-[#6a7280] py-4 "> My overarching career goal is to specialize in the dynamic and rapidly evolving field of Cloud Computing where i could leverage my skills and become successfull in software development helping my organization in achieving their goal</p>
              
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About