import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';


function Portfolio(props) {

    const data=[
        {
            id:1,
            Image: IMG1,
            title: 'Figma dash board for data web apps',
            github: 'hhtps:github.com',
            demo: 'https://dribble.com'
        },
        {
            id:2,
            Image: IMG2,
            title: 'Figma dash board for data web apps',
            github: 'hhtps:github.com',
            demo: 'https://dribble.com'
        },
        {
            id:3,
            Image: IMG3,
            title: 'Figma dash board for data web apps',
            github: 'hhtps:github.com',
            demo: 'https://dribble.com'
        },
        {
            id:4,
            Image: IMG4,
            title: 'Figma dash board for data web apps',
            github: 'hhtps:github.com',
            demo: 'https://dribble.com'
        },
        {
            id:5,
            Image: IMG5,
            title: 'Figma dash board for data web apps',
            github: 'hhtps:github.com',
            demo: 'https://dribble.com'
        },
        {
            id:6,
            Image: IMG6,
            title: 'Figma dash board for data web apps',
            github: 'hhtps:github.com',
            demo: 'https://dribble.com'
        }
    ]
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                {data.map(({id, Image, title, github, demo})=>(
                    <article key={id } className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={Image} alt='portfolio'/>
                    </div>
                    <h3>{title}</h3>
                    <div className='portfolio_item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                ))}
                
            </div>
        </section>
    );
}

export default Portfolio;