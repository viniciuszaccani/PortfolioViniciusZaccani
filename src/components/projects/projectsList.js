import calculator from '../../assets/tip-calculator.png';
import timeZone from '../../assets/timezone.png';
import ticTacToe from '../../assets/ticTacToe.png'
import VyntPage from '../../assets/vynt_project.png';



export const  data = [
    {
        id: 1,
        name: 'Revestimentos VYNT',
        description: 'Site desenvolvido para uma empresa de revestimentos. O projeto foi construído em WordPress utilizando Elementor.',
        year: '2024',
        tools:['WordPress', 'Elementor'],
        image:{
            src: VyntPage,
            alt:'HomePage da pagina'
        },
        githubLink: '',
        previewLink: 'https://vyntbr.com.br/',
    },
    {
        id: 2,
        name: 'Tip Calculator App',
        description: 'Este é um projeto de calculadora de gorjetas desenvolvido como parte de um desafio do Frontend Mentor.',
        year: '2023',
        tools:['Javascript', 'HTML', 'CSS'],
        image:{
            src: calculator,
            alt:'Layout da pagina, similar a uma calculadora'
        },
        githubLink: 'https://github.com/viniciuszaccani/tip-calculator-app',
        previewLink: 'https://viniciuszaccani.github.io/tip-calculator-app/',
    },
    {
        id: 3,
        name: 'Timezone Webpage',
        description: 'Feito com o objetivo de praticar o uso do npm, este projeto é uma página web simples que exibe a hora atual do usuário, com a funcionalidade de selecionar e exibir o horário em diferentes fusos horários. A aplicação utiliza principalmente as bibliotecas dayjs e micromodal, instaladas via npm.',
        year: '2024',
        tools:['Npm', 'Javascript', 'HTML'],
        image:{
            src: timeZone,
            alt:'Pagina com um relógio e zona do seu fuso horario'
        },
        githubLink: 'https://github.com/viniciuszaccani/TimeZoneNow',
        previewLink: 'https://viniciuszaccani.github.io/TimeZoneNow/',
    },
    {
        id: 4,
        name: 'Tic Tac Toe',
        description: 'Este é um projeto de Jogo da Velha desenvolvido como parte de estudos e prática com React',
        year: '2024',
        tools:['Javascript', 'React', 'HTML', 'CSS'],
        image:{
            src: ticTacToe,
            alt:'Layout da pagina, jogo da velha (Tic-Tac-Toe)'
        },
        githubLink: 'https://github.com/viniciuszaccani/Tic-Tac-Toe',
        previewLink: 'https://viniciuszaccani.github.io/Tic-Tac-Toe/',

    }
]


