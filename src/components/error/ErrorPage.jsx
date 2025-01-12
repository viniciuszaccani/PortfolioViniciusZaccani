import { useNavigate } from "react-router-dom";
import './errorPage.css';
import errorImage from "../../assets/errorImage.jpg"

function ErrorPage(){
    const navigation = useNavigate()

    function navegar() {
        navigation("/Home")
    }

    return (
        <div className="errorContent">
            <img src={errorImage} alt="" />
            <p>Algo deu errado na sua navegação</p>
            <button  onClick={navegar} className="btnError"><p>Voltar para o inicio</p></button>
            
        </div>

    )
}

export default ErrorPage;