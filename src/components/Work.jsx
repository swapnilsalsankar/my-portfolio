import React from 'react'

function Work() {
  return (
    <div name="Work" id='work' class="w-full md:min-h-screen text-[white] bg-black ">
      <div class="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
        <div class="pb-8">
          <p class="text-4xl font-bold inline border-b-4 border-[#C3073F]">Work Experience</p>
          {/* <p class="py-4">Experience that I have</p> */}
        </div>
        <div class="bg-white rounded-md shadow-xl border border-gray-300 p-4 mb-8 shadow-[#b1b8c1]">
          <h3 class="text-2xl font-bold text-indigo-800 mb-2 text-center">Software Engineer</h3>
          <p class="text-gray-600 text-center">Tech Mahindra Ltd, Pune, India</p>
          <h5 class="py-2 text-black text-center">Sep 2021 – Aug 2022</h5>
          <ul class="list-disc pl-6">
            <li class="py-2 text-black">
              Developed <span class="text-indigo-800 font-semibold">RESTful APIs</span> in <span class="text-indigo-800 font-semibold">Node.js</span> to facilitate seamless interaction between the book publishing app and external services, enabling
              functionalities such as book creation, editing, and analysis generation.
            </li>
            <li class="py-2 text-black">
              Architected and deployed the app infrastructure on <span class="text-indigo-800 font-semibold">AWS</span> using terraform to accommodate a growing user base of over 1000 users
              and leveraged <span class="text-indigo-800 font-semibold">Jenkins</span>Jenkins for automation and AWS services like <span class="text-indigo-800 font-semibold">EC2, S3, RDS, Route53, IAM roles,</span>etc., reducing manual efforts by <span class="text-indigo-800 font-semibold">90%</span>.
            </li>
            <li class="py-2 text-black">Applied <span class="text-indigo-800 font-semibold">SDLC</span> principles throughout the software development process resulting in on-time delivery of critical features, increased team
              efficiency by  <span class="text-indigo-800 font-semibold">30%</span></li>
            <li class="py-2 text-black">Utilized Bash and Python scripting for automation, streamlining deployment processes and reducing manual interventions and supervised
              sprint delivery using GitHub based <span class="text-indigo-800 font-semibold">CI/CD</span> pipelines by developing reusable Test Scripts and Test Packages.</li>
          </ul>
        </div>
        <div class="bg-white rounded-md shadow-xl border border-gray-300 p-4 mb-8 shadow-[#b1b8c1]">
          <h3 class="text-2xl font-bold text-indigo-800 mb-2 text-center">Software Engineer</h3>
          <p class="text-gray-600 text-center">Tech Mahindra Ltd, Pune, India</p>
          <h5 class="py-2 text-black text-center">Aug 2019 - Aug 2021</h5>
          <ul class="list-disc pl-6">
            <li class="py-2 text-black">
              Extracted app-settings functionality from <span class="text-indigo-800 font-semibold">Monolith</span> & created a high-performance distributed service using <span class="text-indigo-800 font-semibold">NodeJS</span> and then assessed using
              <span class="text-indigo-800 font-semibold">Docker, AWS ECS, DynamoDB, and Gitlab pipelines,</span> supporting over <span class="text-indigo-800 font-semibold">10,000</span> settings.
            </li>
            <li class="py-2 text-black">
              Led system design efforts, playing a pivotal role in planning, reviewing, and implementing enterprise <span class="text-indigo-800 font-semibold">SaaS</span> solutions on <span class="text-indigo-800 font-semibold">AWS</span> which resulted
              in a notable <span class="text-indigo-800 font-semibold">10%</span> increase in overall system efficiency.
            </li>
            <li class="py-2 text-black">
              Spearheaded <span class="text-indigo-800 font-semibold">Agile</span> implementation, fostering seamless collaboration among cross-functional teams, resulting in on-time delivery of critical
              features, increased team efficiency by <span class="text-indigo-800 font-semibold">30%</span>.
            </li>
          </ul>
        </div>



      </div>
    </div>
  )
}

export default Work