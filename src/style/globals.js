import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: 0;
}

:root{
    --background-color: #fff;
    --background-color-nav: #e5e5e5;
    --color-title: #0a2b1e;
    --color-paragraph: #596b65;
    --background-button:  #17bf9e;
    --color-text-button: #fff;
    --color-icon: #17bf9e;
}

body{
    background-color: var(--background-color);
}

section, footer{
    padding-top: 70px;
    padding-bottom: 70px;
}

h1,h2,h3,h4,h5,h6{
    font-size: 2rem;
    line-height: 50px;
    font-family: 'Poppins', sans-serif;
    color: var(--color-title);
    font-weight: 600;
}

p{
    color: var(--color-paragraph);
    font-size: 1rem;
    line-height: 35px;
    font-family: "Andada Pro", serif;
    font-weight: 400;
}

button.btn {
  background: var(--background-button);
  color: var(--color-text-button);
  padding: 7px 25px;
  border-radius: 50px;
}

i {
  color: var(--color-icon);
}


`;
