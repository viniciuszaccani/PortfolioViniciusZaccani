import {data} from './experiencesList.js'
import "./experienceStyle.css"

const xp = [...data].reverse();

function Experience() {
    return(
        <div className='experiences-content'>
            <h2>My Experience</h2>
            <div>
                {xp.map(experiences => {
                    return(
                        <div className='experience-cards' key={experiences.id}>
                            <div>
                                <span className='experience-title'>{experiences.title}</span>
                                <p className='gray'>{experiences.startDate} - {experiences.endDate}</p>
                            </div>
                            <span className='experience-company'>{experiences.company}</span>
                            <p>{experiences.description}</p>
                        </div>
                        
                    ) 
                    

                })}
            </div>
        </div>
    ) 
}

export default Experience;

/*
 <div>
                {projectsList.map(projeto => {
                    return (
                        <CardProject key={projeto.id} data={projeto}/>
                    )
                }) }
            </div>
*/