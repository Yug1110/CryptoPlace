import React from 'react'
import "./Footer.css"
import Github from "../../assets/Github.svg"
import Linkedin from "../../assets/Linkedin.svg"
import Youtube from "../../assets/Youtube.svg"

function Footer() {
  return (
    <div className='footer'>
        <p>Copyright @ 2024, Cryptoplace - All Right Reserved.</p>
        <ul>
          <li>
            <a href="https://github.com/Yug1110"><img src={Github} alt="" /></a>
          </li>
          <li><a href="https://www.youtube.com/@maskedcoder-dy1ub"><img src={Youtube} alt="" /></a></li>
          <li><a href="https://in.linkedin.com/in/yugayu-garg-47a001225"><img src={Linkedin} alt="" /></a></li>
        </ul>
    </div>
  )
}

export default Footer