import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

function HeaderSocials() {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.cocm" target='_blank'><BsLinkedin/></a>
      <a href="https://github.cocm" target='_blank'><FaGithub/></a>
      <a href="https://dribbble.cocm" target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials