import {createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #e52e4d;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    // font-size: 16px (desktop)
    // adaptar a tela de acordo com o layout
    html{
        @media (max-width: 1000px){
            font-size: 93.75%;     //16*0.9375=15  equivale a 15 px
        }
        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }
    //REM = 1rem = 16px
    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased; //fonte fica mais detalhada no navegador.
    }
    border-style, input, textarea, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    } 
    // padrão
    button{
        cursor: pointer;
    }
    // tudo que tiver desabilidado vai dar um opacity
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }




`