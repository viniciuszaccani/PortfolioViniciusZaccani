import './projectsStyle.css'
import github from "../../assets/github.svg"
import arrowTopCorner from "../../assets/arrowTopCorner.svg"

function CardProject({data}){

    return(
        <div className='project-container'>
            <div className='project-img'> 
                <img src={data.image.src} alt={data.alt} className='project-image'/>
            </div>
            <div className='project-content'>
                <h3>{data.name}</h3>
                <p>{data.description}</p>

                <div className='project-info'>
                    <p>Informações do projeto</p>
                </div>
                
                <div className='project-info'>
                    <span>Ano</span>
                    <span className='gray'>{data.year}</span>
                </div>
                <div className='project-info'>
                    <span>Ferramentas</span>
                    <span> {data.tools.map((tool, index) => ( <span key={index} className='gray'> {tool}{index < data.tools.length - 1 && ','} </span> ))} </span>
                </div>

                <div className='project-links'>
                    <a target="_blank" href={data.previewLink}>Live Demo  <img src={arrowTopCorner} alt="" /></a>
                    <a target="_blank" href={data.githubLink}>Veja no Github <img src={github} alt="" /> </a>
                </div>
            </div>
        </div>
    )
}

export default CardProject;