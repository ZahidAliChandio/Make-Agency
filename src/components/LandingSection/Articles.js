import React from 'react'
import ArticlesContent from './ArticlesContent'
import './Articles.css'
import './ArticlesContent.css'
export default function Articles(props) {
  return (
    <div id="articles-section" style={{ "backgroundColor": `${props.bgColor}` }}>
      <h1>Recent Articles</h1>
      <div className="articles-inner-container">
        <ArticlesContent icon={<i class="fas fa-bullhorn"></i>} heading={"News"} title={"How to join the TikTok party"} para={"TikTok is having a moment in the sun. According to TechCrunch, young people are now watching videos on the platform..."} />
        <ArticlesContent icon={<i class="fas fa-bullhorn"></i>} heading={"News"} title={"Nordcloud Klarity website wins Honourable Mention from awwwards"} para={"Klarity | awwwards. With an impressive portfolio of web projects under our belt this year, our design and development teams..."} />
        <ArticlesContent icon={<i class="far fa-heart"></i>} heading={"Careers"} title={"Design Director"} para={"We are excited to announce that we are on the lookout for an experienced passionate Design Director to join the team at..."} />
      </div>
    </div>
  )
}
