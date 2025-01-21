import React from 'react'
import './Skills.css'
import UIDesign from '../../assets/ui-design.png'
import webDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
       <span className='skillTitle'>What I do</span>
       <span className="skillDesc">I am a skilled web designer with experience in creating visually appealing and user friendly websites Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque labore sunt animi id fugit veniam modi officiis, culpa atque amet, neque sit iure. Expedita, eligendi? </span>
       <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} className='skillBarImg' alt="UIDesign" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>this is a demo text, you can write your own content</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={webDesign} className='skillBarImg' alt="webDesign" />
            <div className="skillBarText">
                <h2>Website Design</h2>
                <p>This demo text can be changed while making the production ready website.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} className='skillBarImg' alt="AppDesign" />
            <div className="skillBarText">
                <h2>App Design</h2>
                <p>You can write trext related to mobile app development.</p>
            </div>
        </div>
       </div>
    </section>
  )
}

export default Skills
