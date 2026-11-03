import React from 'react'
import gsap from 'gsap';
import { navLinks } from '../../constants/index'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {

    useGSAP(()=> {
        const navTween = gsap.timeline({
            scrollTrigger:{
                trigger: 'nav',
                start: 'bottom top',
            }
        })
    
        navTween.fromTo('nav',{backgroundColor: 'transparent'},{
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    })

  return (
    <div className='flex justify-between pt-5 px-50'>
      <a href="#home" className='flex items-center gap-2'>
        <img src="Mojito-Assets-main/images/logo.png" alt="logo" />
        <p>Velvet Pour</p>
      </a>

      <ul className='flex gap-10'>
        {navLinks.map((link)=>(
            <li key={link.id}>
                <a href={`#{link.id}`}>{link.title}</a>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar
