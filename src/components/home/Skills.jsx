import {data} from './skillsList.js'
import './skillStyle.css'


function Skills() {
    let skillList = data;

    return(
        <div className='skills-content'>
            <h2>Competências</h2>
            <div className='items-content'>
                <p>Estou sempre em busca de novos desafios que expandam meu conhecimento e minhas habilidades, tanto no âmbito tecnológico quanto no profissional, visando o aprimoramento contínuo e a superação de limites.</p>
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

/*                <p>Estou sempre em busca de adquirir novas habilidades e aprimorar as que já possuo.</p>
*/
