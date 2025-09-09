import React from 'react'
import HomeHero from '../Components/HomeHero'
import HomeAbout from '../Components/HomeAbout'
import HomeWhatWeDo from '../Components/HomeWhatweDo'
import ServicesSection from '../Components/ServiceSection'
import SkillsSection from '../Components/HomeSkill'
import HomeProject from '../Components/HomeProject'
import HomeTestimonial from '../Components/HomeTestimonial'
import HomeContactSection from '../Components/HomeContact'
import HomeBlogSection from '../Components/HomeBlog'
import HomeAbout2 from '../Components/HomeAbout2'

const Home = () => {
  return (
    <div>
      <HomeHero/>
      <HomeAbout/>
      <HomeAbout2/>
      <HomeWhatWeDo/>
      <ServicesSection/>
      <SkillsSection/>
      <HomeProject/>
      <HomeTestimonial/>
      <HomeContactSection/>
      <HomeBlogSection/>
    </div>
  )
}

export default Home
