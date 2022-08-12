import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import ArticlesContent from './ArticlesContent'
import './Articles.css'
import './ArticlesContent.css'
export default function Articles() {
  return (
    <div id="articles-section">
      <h1>Recent Articles</h1>
      <div className="articles-container">
        <ArticlesContent icon={""} heading={"News"} title={"How to join the TikTok party"} para={"TikTok is having a moment in the sun. According to TechCrunch, young people are now watching videos on the platform..."} />
        <ArticlesContent icon={""} heading={"News"} title={"Nordcloud Klarity website wins Honourable Mention from awwwards"} para={"Klarity | awwwards. With an impressive portfolio of web projects under our belt this year, our design and development teams..."} />
        <ArticlesContent icon={<AiOutlineHeart size={24} color='blue'/>} heading={"Careers"} title={"Design Director"} para={"We are excited to announce that we are on the lookout for an experienced passionate Design Director to join the team at..."} />
      </div>
    </div>
  )
}
