import { useNavigate } from "react-router-dom";
import './style.css'

function HomePage() {
    const navigation = useNavigate()

    function navegar() {
        navigation("/sobre")
    }

    return <div>
        <div>
            <h1>Olá, eu me chamo Vinicius Zaccani</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div>
                <button class="btn">Contact me</button>
                <ul>
                    <li>linkedin</li>
                    <li>github</li>
                </ul>
            </div>
        </div>
        </div>
}

export default HomePage;