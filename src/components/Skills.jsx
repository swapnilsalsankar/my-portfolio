import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github1.png';
import Argocd from '../assets/argocd.png';
import Mongo from '../assets/mongo.png';
import Figma from '../assets/figma.png';
import Grafana from '../assets/Grafana.png';
import AWS from '../assets/aws.png';
import Docker from '../assets/docker.png';
import Kubernetes from '../assets/kubernetes.jpg';
import Terraform from '../assets/terraform.png';
import Jenkins from '../assets/jenkins.png';
import Helm from '../assets/helm.png';
import SonarQube from '../assets/SonarQube.png';

function Skills() {
  return (
    <div name='skills' id='skills' className='w-full  text-[#f7f8f9] bg-black md:min-h-screen '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
          <div className=''>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              {/* <p className='py-4'>These are the technologies I've worked with</p> */}
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4 text-black font-bold'>HTML</p>
                </a>  
              </div>

              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4 text-black font-bold'>CSS</p>
                </a>
                  
              </div>

              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <img className='w-20 mx-auto ' src={JavaScript} alt="JS icon" />
                  <p className='my-4 text-black font-bold'>JAVASCRIPT</p>
                </a>
                  
              </div>

              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://docs.github.com/en">
                <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                  <p className='my-4 text-black font-bold'>GITHUB</p>
                </a>
              </div>

              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://nodejs.org/docs/latest/api/">
                <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                  <p className='my-4 text-black font-bold'>NODE JS</p>
                </a>
              </div>

              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://www.mongodb.com/docs/">
                <img className='w-20 mx-auto' src={Mongo} alt="MongoDB icon" />
                  <p className='my-4 text-black font-bold'>MONGODB</p>
                </a>
              </div>

              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://tailwindcss.com/docs/installation">
                  <img className='w-20 mx-auto' src={Argocd} alt="Tailwind icon" />
                  <p className='my-4 mt-10 text-black font-bold'>Argo CD</p>
                </a>
              </div>

              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://help.figma.com/hc/en-us">
                  <img className='w-20 mx-auto' src={Figma} alt="Figma icon" />
                  <p className='my-4 text-black font-bold'>FIGMA</p>
                </a>
              </div>

              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://help.figma.com/hc/en-us">
                  <img className='w-20 mx-auto' src={Grafana} alt="HTML icon" />
                  <p className='my-4 text-black font-bold'>Grafana</p>
                </a>
              </div>

              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://docs.aws.amazon.com/">
                  <img className='w-20 mx-auto' src={AWS} alt="AWS icon" />
                  <p className='my-4 text-black font-bold'>AWS</p>
                </a>
              </div>

              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://docker-docs.uclv.cu/">
                  <img className='w-20 mx-auto' src={Docker} alt="Docker icon" />
                  <p className='my-4 text-black font-bold'>Docker</p>
                </a>
              </div>

              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://kubernetes.io/docs/setup/">
                  <img className='w-20 mx-auto' src={Kubernetes} alt="Kubernetes icon" />
                  <p className='my-4 mt-8 text-black font-bold'>Kubernetes</p>
                </a>
              </div>
              <div className='shadow-lg shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://kubernetes.io/docs/setup/">
                  <img className='w-20 mx-auto' src={Jenkins} alt="Kubernetes icon" />
                  <p className='my-4  mt-12 text-black font-bold'>Jenkins</p>
                </a>
              </div> 
              <div className='shadow-md shadow-[#b1b8c1] hover:scale-110 duration-500 bg-white'>
                <a href="https://docker-docs.uclv.cu/">
                  <img className='w-20 mx-auto' src={SonarQube} alt="SonarQube icon" />
                  <p className='mt-16 my-4 text-black font-bold'>SonarQube</p>
                </a>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white'>
                <a href="https://docker-docs.uclv.cu/">
                  <img className='w-20 mx-auto' src={Helm} alt="Helm icon" />
                  <p className='my-4 text-black font-bold'>Helm</p>
                </a>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-white'>
                <a href="https://docker-docs.uclv.cu/">
                  <img className='w-20 mx-auto' src={Terraform} alt="Terraform icon" />
                  <p className='my-4 text-black font-bold'>Terraform</p>
                </a>
              </div>
          </div>
      </div>
    </div> 
  )
}

export default Skills