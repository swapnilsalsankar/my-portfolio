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
    <div name='skills' className='-full md:min-h-screen'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
                </a>  
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
                </a>
                  
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                  <p className='my-4'>JAVASCRIPT</p>
                </a>
                  
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://docs.github.com/en">
                <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                  <p className='my-4'>GITHUB</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://nodejs.org/docs/latest/api/">
                <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                  <p className='my-4'>NODE JS</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://www.mongodb.com/docs/">
                <img className='w-20 mx-auto' src={Mongo} alt="MongoDB icon" />
                  <p className='my-4'>MONGO DB</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://tailwindcss.com/docs/installation">
                  <img className='w-20 mx-auto' src={Argocd} alt="Tailwind icon" />
                  <p className='mt-10'>Argo CD</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://help.figma.com/hc/en-us">
                  <img className='w-20 mx-auto' src={Figma} alt="Figma icon" />
                  <p className='my-4'>FIGMA</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://help.figma.com/hc/en-us">
                  <img className='w-20 mx-auto' src={Grafana} alt="HTML icon" />
                  <p className='my-4'>Grafana</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://docs.aws.amazon.com/">
                  <img className='w-20 mx-auto' src={AWS} alt="AWS icon" />
                  <p className='my-4'>AWS</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://docker-docs.uclv.cu/">
                  <img className='w-20 mx-auto' src={Docker} alt="Docker icon" />
                  <p className='my-4'>Docker</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://docker-docs.uclv.cu/">
                  <img className='w-20 mx-auto' src={Jenkins} alt="Jenkins icon" />
                  <p className='mt-12'>Jenkins</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://docker-docs.uclv.cu/">
                  <img className='w-20 mx-auto' src={SonarQube} alt="SonarQube icon" />
                  <p className='mt-16'>SonarQube</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://docker-docs.uclv.cu/">
                  <img className='w-20 mx-auto' src={Helm} alt="Helm icon" />
                  <p className='my-4'>Helm</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://docker-docs.uclv.cu/">
                  <img className='w-20 mx-auto' src={Terraform} alt="Terraform icon" />
                  <p className='my-4'>Terraform</p>
                </a>
              </div>

              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://kubernetes.io/docs/setup/">
                  <img className='w-20 mx-auto' src={Kubernetes} alt="Kubernetes icon" />
                  <p className='mt-8'>Kubernetes</p>
                </a>
              </div>
              
          </div>
      </div>
    </div> 
  )
}

export default Skills