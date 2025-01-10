import './contactStyle.css'
import { useState } from 'react'
import curriculo from '../../assets/curriculo.pdf'

/*<h1>Entre em<br/> contato comigo</h1>
<p>Me mande um email <a href="mailto:vinicius.zaccani@gmail.com" className='border'>vinicius.zaccani@gmail.com</a> </p>
<br />
<p>Para mais informações, veja meu <a href="" className='border'>curriculo</a> </p>

*/

function ContactPage() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    function submit(e){
        e.preventDefault()
        setIsSubmitting(true);

        const formElements = document.querySelector("form")
        console.log('teste de envio de formulario')
        const formData = new FormData(formElements)
        const currentDate = new Date();
        formData.append('DataHora', currentDate.toLocaleString('pt-BR', { hour12: false }));
        console.log(currentDate.toLocaleString('pt-BR', { hour12: false }))

        fetch("https://script.google.com/macros/s/AKfycbwKRYbvOm5Sf6WGFVIj1IPU9CNrAmrgb7x-7PWpXfVfNxcVXXLVM5tW8LK0gOeTzYjF/exec", {
            method:"POST",
            body: formData
        }).then((res)=>res.json())
        .then((data)=>{
            window.alert(' Mensagem enviada com sucesso!\n\n Em breve entrarei em contato com você.')
            formElements.reset();
        }).catch((error) => {
            console.error("Erro ao enviar o formulário:", error);
            window.alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
        })
        .finally(() => {
            setIsSubmitting(false);
        });


    }


    return (
        <div className="container-projects">
            <div className='projects-infos'>
                <h1>Entre em<br/> contato</h1> 
                <p>Me mande um email <a href="mailto:vinicius.zaccani@gmail.com" className='border'>vinicius.zaccani@gmail.com</a> </p>
                <br /><p>Para mais informações, veja meu <a href={curriculo} className='border' download={"Currículo - Vinicius Zaccani"}>curriculo</a> </p>

                <div className="container-btn">
                
                        <a href="https://www.linkedin.com/in/vinicius-zaccani-526222176/" target="_blank" className='btn-contact'>
                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26"><path d="M5.39825 7.79682C6.70735 7.79682 7.76858 6.73558 7.76858 5.42649C7.76858 4.11739 6.70735 3.05615 5.39825 3.05615C4.08915 3.05615 3.02792 4.11739 3.02792 5.42649C3.02792 6.73558 4.08915 7.79682 5.39825 7.79682Z" fill="#D3E97A"></path><path d="M10.0068 9.59282V22.7434H14.0898V16.2402C14.0898 14.5242 14.4127 12.8623 16.5403 12.8623C18.6388 12.8623 18.6648 14.8242 18.6648 16.3485V22.7445H22.75V15.5327C22.75 11.9902 21.9873 9.26782 17.8468 9.26782C15.8589 9.26782 14.5264 10.3587 13.9815 11.3912H13.9263V9.59282H10.0068ZM3.35292 9.59282H7.4425V22.7434H3.35292V9.59282Z" fill="#D3E97A"></path></svg>
                        
                        </a>
                        <a href="https://github.com/viniciuszaccani" target="_blank" className='btn-contact'>
                        <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#607B96"><path d="M12.001 2c-5.525 0-10 4.475-10 10a9.994 9.994 0 006.837 9.488c.5.087.688-.213.688-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.913-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.563 4.938.363.312.676.912.676 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z" fill="#D3E97A"></path></svg>
                        </a>

                        <a href="https://wa.me/5551998337341" target="_blank"className='btn-contact'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 50 50" fill="#D3E97A">
                            <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                        </svg>
                        </a>
                        
                    </div>


            </div>
    
                <form className="form" onSubmit={(e)=>submit(e)}>
                    <label for="name">Nome</label>
                    <input type="text" id="name" name="Nome" required/>

                    <label for="email">Email</label>
                    <input type="email" id="email" name="Email" required/>

                    <label for="subject">Assunto</label>
                    <input type="text" id="subject" name="Assunto" required/>

                    <label for="message">Mensagem</label>
                    <textarea name="Mensagem" id="message" required></textarea>

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar"}
                    </button>
                </form>
            </div>
    
    );
}

export default ContactPage;