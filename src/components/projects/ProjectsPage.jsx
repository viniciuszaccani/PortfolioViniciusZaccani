import CardProject from './CardProject';
import {data} from './projectsList'

let projectsList = data;

function ProjectsPage(){

    return(
        <div className="container-page">
            <div className='margin-bottom65'>
                <h1>Projetos</h1>
                <p>Aqui estão alguns dos projetos que eu criei e que mostram minha paixão pelo desenvolvimento.</p>
            </div>
            <div>
                {projectsList.map(projeto => {
                    return (
                        <CardProject key={projeto.id} data={projeto}/>
                    )
                }) }
            </div>
            
        </div>
        
    )
}

export default ProjectsPage;