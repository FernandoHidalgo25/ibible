import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 : root{
     --maxWidth: 1280px;
     --white: #fff;
     --lightGrey: #eee;
     --medGrey: #353535;
     --darkGrey: #1c1c1c;
     --fontSuperBig: #2.5rem;
     --fontBig: 1.5rem;
     --fontMed: 1.2rem;
     --fontSmall: 1rem;
 }

 *{
     box-sizing: border-box;
     font-family: 'Abel', sans-serif;
     align-items: center;
 }

 body {
     margin: 0;
     padding: 0;
     text-align: center;

     h1 {
         font-size: 2rem;
         font-weight: 600
         color: var(--white);
         text-align: center;
     }

     h3{
        font-size: 1.1rem;
        font-weight: 600
     }

     p{
         font-size: 1rem;
         color: var(--white);
     }

     .card h1 {
        font-size: 1.25em;
      }
      
      .new_review, .edit_review {
        margin-left: 30%;
        min-width: 300px;
        margin-right: 30%;
        background-color: #9400ff;
        border-radius: 20px;
        margin-bottom: .3em;
        margin-top: .3em;
      }
      
      
      input {
        display: block;
        margin: .5em auto;
      }
      
      .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
      }
      
      .card {
        /* width: 300px;
        height: 500px; */
        margin: 10px;
        background-color: #0dff00;
        border-radius: 10px;
      }
      
      .card img {
        width: 300px;
        height: 200px;
      }
      
      .review {
        background-color: red;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: .5em;
        border-radius: 5px;
        padding: 1em;
      }
      
      .show img {
        height: 500px;
        width: 100%;
        object-fit: cover;
      }
      
      .show {

      }

      .show h1{

      }
      
      textarea {
        width: 80%;
        font-size: .8em;
        height: 6em;
        border-radius: 10px;
      }
      
      .errors {
        list-style: none;
        color: yellow;
        padding-left: 0;
      }
      
      .field_with_errors {
        color: red;
      }
      
      .field_with_errors > input {
        border: solid red 3px;
      }
      
      .flash {
        max-width: 500px;
        margin: 1em auto;
        padding: .25em 0;
        font-size: .8em;
        border-radius: 3px;
        text-decoration: none;
      }
      
      .flash.errors {
        background-color: red;
      }
      
      .flash.notices {
        background-color: yellow;
        color: black;
      }
      
      /* taken from w3 schools: https://www.w3schools.com/howto/howto_css_loader.asp */
      .loader {
        border: 100px solid #f3f3f3; /* Light grey */
        border-top: 100px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 400px;
        height: 400px;
        text-align: center;
        animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
 }


`