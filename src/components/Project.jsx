import React from 'react'

const Project = () => {
  return (
  <div name="projects" class="w-full md:min-h-screen text-[#1e3751]">
    <div class="max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full">
      <div class="pb-8">
      <p class="text-4xl font-bold inline border-b-4 border-[#C3073F]">Projects</p>
      <p class="py-4">Projects that I am proud of</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
      <div class="shadow-md shadow-[#040c16] group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">DevSecOps-Netflix-Clone </h3>
          <p class="text-[#6a7280]">2023</p>
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Kubernetes</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Prometheus</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Grafana</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Jenknins</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">AWS</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">SonarQube</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Trivy</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Helm</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">ArgoCD</p>

          </div>
          <p class="py-2 text-[#6a7280]">Implemented a robust DevSecOps pipeline for a High streaming platform by
           Leveraging Kubernetes, Prometheus, Grafana, Jenkins, SonarQube, Trivy, Argo CD, and Helm, I optimized resource utilization while adhering to OWASP standards. 
           Highlights include seamless integration of Helm charts and Argo CD, real-time monitoring with Prometheus and Grafana, and automated deployment and code inspection with Jenkins and SonarQube. 
          These initiatives ensured security, scalability, and efficiency throughout the software development lifecycle..</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/PatidarAsh/Mern-Estate.git" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          <a href="https://skyline-realesate.onrender.com" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a>
        </div>
      </div>
      <div class="shadow-md shadow-[#040c16] group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">CICD-using-CodePipeline</h3>
          <p class="text-[#6a7280]">2024</p>
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">CodeCommit</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">CodeBuild</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">CodeDeploy</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">CodePipeline</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Kubernetes</p>


          </div>
          <p class="py-2 text-[#6a7280]">Led the development and implementation of a robust CI/CD pipeline on AWS, integrating key services including CodeCommit, CodeBuild, CodeDeploy, and CodePipeline.
           Leveraged AWS S3 for artifact storage, ensuring scalability and reliability, while implementing stringent security measures using AWS KMS for authentication.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/swapnilsalsankar/CICD_using_CodePipeline.git" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          <a href="https://www.figma.com/proto/gtRe3osceIdUf9ueCqArGE/Ashvini_Patidar?type=design&node-id=573-1345&viewport=-545%2C-1113%2C0.23&t=XYEr4rCvJC4pbIgb-0&scaling=scale-down&starting-point-node-id=574%3A1351" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a>
        </div>
      </div>
      <div class="shadow-md shadow-[#040c16] group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">PetMatch App</h3>
          <p class="text-[#6a7280]">2023</p>
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Figma</p>
          </div>
          <p class="py-2 text-[#6a7280]">For this UX project, the work done involved conducting usability tests, gathering user feedback, 
          and iterating on the design to enhance the user experience of the mobile app that helps find people their furry friend.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://www.figma.com/proto/gtRe3osceIdUf9ueCqArGE/Ashvini_Patidar?type=design&node-id=72-377&viewport=193%2C99%2C0.11&t=b76cJn1lTgRDykzM-0&scaling=min-zoom&starting-point-node-id=490%3A695" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          <a href="https://www.figma.com/proto/gtRe3osceIdUf9ueCqArGE/Ashvini_Patidar?type=design&node-id=190-225&viewport=170%2C346%2C0.03&t=Jt7pl2GiOUqrlGGR-0&scaling=scale-down&starting-point-node-id=222%3A2468&show-proto-sidebar=1" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a>
        </div>
      </div>
      <div class="shadow-md shadow-[#040c16] group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Retail Analytics</h3>
          <p class="text-[#6a7280]">2023</p>
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Oracle SQL</p>
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">Pl/SQL</p>
          </div>
          <p class="py-2 text-[#6a7280]">This project was build using oarle pl/sql- to provide a comprehensive price comparison platform across stores for 
          groceries and electronics providing a valuable solution to the customers to make informed purchasing decisions.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/PatidarAsh/DMDD_RetailAnalytics_Project" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          {/* <a href="" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a> */}
        </div>
      </div>
      <div class="shadow-md shadow-[#040c16] group container rounded-md  flex flex-col justify-between text-center items-center mx-auto py-2 px-4 overflow-auto">
        <div>
          <h3 class="pt-3 text-2xl font-bold text-[#1e3751] ">Word Puzzle Game</h3>
          <p class="text-[#6a7280]">2023</p>
          <div class="pt-1 flex flex-wrap justify-center gap-0 items-center">
            <p class="text-xs text-[#1e3751] border-[#6a7280] border rounded-lg m-1 p-1 hover:bg-[#1e3751] hover:text-white">JavaFX</p>
          </div>
          <p class="py-2 text-[#6a7280]">This game is designed as a fun and challenging activity to test your English language skills through word puzzles while providing entertainment.</p>
        </div>
        <div class="flex text-center ">
          <a href="https://github.com/PatidarAsh/CSYE_FinalProject.git" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Code</button>
          </a>
          <a href="https://drive.google.com/file/d/1Fd_RC4Nwh4Wwdo5yxDoRgzTKz9PLT4xg/view?usp=sharing" target="_blank" rel="noreferrer">
            <button class="rounded-sm text-white bg-[#C3073F] px-3 py-1 my-3 mx-1 flex items-center hover:bg-[#1e3751]">Demo</button>
          </a>
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default Project

