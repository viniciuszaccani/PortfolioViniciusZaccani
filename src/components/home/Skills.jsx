import {data} from './skillsList.js'
import './skillStyle.css'


function Skills() {
    let skillList = data;

    return(
        <div className='skills-content'>
            <h2>My Skills</h2>
            <div>
                <p>Estou sempre em busca de adquirir novas habilidades e aprimorar as que já possuo.</p>
                <div className='skills-list'>
                    {skillList.map((skill, index) => {
                        return(
                        <div key={index} className='skill-item'>
                            <span>{skill.name}</span>
                        </div>
                    )
                    })}
                </div>
            </div>
            
        </div>

    ) 
}

export default Skills;