import { useNavigate } from "react-router-dom";
import './style.css'
import capivara from "../assets/capivara_iMac.png"

function HomePage() {
    const navigation = useNavigate()

    function navegar() {
        navigation("/sobre")
    }

    return (
        <div className="container-homepage">
            <div className="homepage-content">
                <h1>Hi, i am <br />Vinicius Zaccani</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem sunt aliquam eius vel blanditiis! Nesciunt quo mollitia vel tempora facilis nam. Accusamus explicabo quasi corporis laborum impedit autem magni exercitationem.</p>
                <div className="container-btn">
                    
                    <button class="btn">
                        <p>Contact me</p>
                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" ><path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM4.049 9h8.559l-2.266-2.265 1.414-1.414 4.735 4.733-4.735 4.734-1.414-1.414L12.718 11H4.049z" /></svg>
                        </div>
                    </button>
                    <a href="">
                    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M5.39825 7.79682C6.70735 7.79682 7.76858 6.73558 7.76858 5.42649C7.76858 4.11739 6.70735 3.05615 5.39825 3.05615C4.08915 3.05615 3.02792 4.11739 3.02792 5.42649C3.02792 6.73558 4.08915 7.79682 5.39825 7.79682Z" fill="#D3E97A"></path><path d="M10.0068 9.59282V22.7434H14.0898V16.2402C14.0898 14.5242 14.4127 12.8623 16.5403 12.8623C18.6388 12.8623 18.6648 14.8242 18.6648 16.3485V22.7445H22.75V15.5327C22.75 11.9902 21.9873 9.26782 17.8468 9.26782C15.8589 9.26782 14.5264 10.3587 13.9815 11.3912H13.9263V9.59282H10.0068ZM3.35292 9.59282H7.4425V22.7434H3.35292V9.59282Z" fill="#D3E97A"></path></svg>
                    </a>
                    <a href="">
                    <svg width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#607B96"><path d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 006.837 9.488c.5.087.688-.213.688-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.913-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.563 4.938.363.312.676.912.676 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z" fill="#D3E97A"></path></svg>
                    </a>
                </div>
            </div>
            <div className="homepage-image">
                <img width="250px" height="250px" src={capivara} alt="Desenho de uma capivara usando computador gerado por IA"/>
            </div> 
        </div>
    );
        
}

export default HomePage;