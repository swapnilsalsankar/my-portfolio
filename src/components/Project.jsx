import React from 'react'

const Project = () => {
  return (
  <div name="projects" id='project' class="w-full md:min-h-screen text-white bg-black ">
    <div class="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
      <div class="pb-8">
      <p class="text-4xl font-bold inline border-b-4 border-[#C3073F]">Projects</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Car-O-Pedia </h3>
          {/* <p class="text-[#6a7280]">2023</p> */}
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">ReactJS</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">NodeJS</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">ExpressJS</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">MongoDB</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">JWT</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">REST APIs</p>
          </div>
          <p class="py-2 text-[#6a7280]">This project was built with the MERN stack—utilizing React, Node.js, Express.js, MongoDB, 
          JWT authentication, and Rest APIs, alongside Tailwind CSS. 
          It's a web application featuring advanced authentication and robust search functionality for housing purpose.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/dhruvi0102/INFO6150-Project.git" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          {/* <a href="https://skyline-realesate.onrender.com" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a> */}
        </div>
      </div>
      <div class="shadow-md shadow-[#b1b8c1]  bg-white group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Cloud Monitoring App</h3>
          {/* <p class="text-[#6a7280]">2023</p> */}
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Figma</p>
          </div>
          <p class="py-2 text-[#6a7280]">Developed a cloud monitoring application utilizing Flask and Psutil, optimizing resource utilization. Automated Elastic Container Registry setup with Python Boto3, slashing deployment time and Orchestrated Docker image deployment to ECR, showcasing strong version control skills and reducing server provisioning time.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/swapnilsalsankar/Cloud-monitoring-app.git" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          {/* <a href="https://www.figma.com/proto/gtRe3osceIdUf9ueCqArGE/Ashvini_Patidar?type=design&node-id=573-1345&viewport=-545%2C-1113%2C0.23&t=XYEr4rCvJC4pbIgb-0&scaling=scale-down&starting-point-node-id=574%3A1351" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a> */}
        </div>
      </div>
      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">ClCD using CodePipeline </h3>
          {/* <p class="text-[#6a7280]">2023</p> */}
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Python</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Kubernetes</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">CodeCommit</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">CodeBuild</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">CodeDeploy</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">CodePipeline</p>
            
          </div>
          <p class="py-2 text-[#6a7280]">Led the implementation of a CI/CD pipeline on AWS using CodeCommit, CodeBuild, CodeDeploy and CodePipeline, ensuring seamless integration. Strengthened security with KMS encryption key, S3 artifact storage, and IAM, achieving high compliance rate.Additionally automated ECR setup with Python Boto3, reducing deployment time and streamlined NGINX installation and configuration on EC2 instances for web application hosting.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/swapnilsalsankar/CICD_using_CodePipeline.git" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          {/* <a href="https://www.figma.com/proto/gtRe3osceIdUf9ueCqArGE/Ashvini_Patidar?type=design&node-id=190-225&viewport=170%2C346%2C0.03&t=Jt7pl2GiOUqrlGGR-0&scaling=scale-down&starting-point-node-id=222%3A2468&show-proto-sidebar=1" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a> */}
        </div>
      </div>
      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">DevSecOps Netflix App </h3>
          {/* <p class="text-[#6a7280]">2023</p> */}
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Kubernetes</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Prometheus</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Grafana</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Jenkins</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">SonarQube</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Argo CD</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Helm Charts</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Docker</p>
          </div>
          <p class="py-2 text-[#6a7280]">Developed a DevSecOps pipeline for a High streaming platform, integrating Kubernetes, Prometheus, Grafana, Jenkins, SonarQube, Argo CD, and Helm. Implemented Helm charts and Argo CD across Kubernetes clusters, enhancing resource utilization and compliance with OWASP standards. Monitored app performance with Prometheus and Grafana, reducing critical task response times. Furthermore Leveraged Jenkins and SonarQube for automated deployment and code inspection, minimizing post-sprint issues.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/swapnilsalsankar/DevSecOps-Netflix-Clone.git" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          {/* <a href="" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a> */}
        </div>
      </div>
      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Word Puzzle Game</h3>
          {/* <p class="text-[#6a7280]">2023</p> */}
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">JavaFX</p>
          </div>
          <p class="py-2 text-[#6a7280]">Created a highly engaging word search game using JavaFX and optimized data structures, garnering a 4.5-star user rating and over 1k downloads. Designed an intuitive user interface with a letter grid and word list and Integration of audio and customization options boosted user satisfaction by over 50%, resulting in a increase in gameplay.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/hussainv5253/WordSearchGame.git" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          <a href="https://drive.google.com/file/d/1Fd_RC4Nwh4Wwdo5yxDoRgzTKz9PLT4xg/view?usp=sharing" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a>
        </div>
      </div>
      <div class="shadow-md shadow-[#b1b8c1] bg-white group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">WebApp</h3>
          {/* <p class="text-[#6a7280]">2023</p> */}
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Node.js</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Terraform</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">AWS</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">REST API</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">PostgreSQL</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">GitHub Actions</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">CI/CD</p>

          </div>
          <p class="py-2 text-[#6a7280]">Orchestrated a scalable backend infrastructure on AWS using Node.js and Terraform, integrating automated testing with JEST and  Leveraging Packer and Systemd to automate AMI creation and EC2 instance startup. By implementing Terraform for infrastructure management and utilizing services like Auto-Scaling, RDS, S3, Route53, and SSL encryption I achieved 99.99% uptime and monitoring with Amazon CloudWatch slashed system downtime.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/swapnilsalsankar/webapp.git" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          {/* <a href="https://drive.google.com/file/d/1Fd_RC4Nwh4Wwdo5yxDoRgzTKz9PLT4xg/view?usp=sharing" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a> */}
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Project

