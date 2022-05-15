import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Encode Sans', sans-serif;
}
body {
  width: 100vw;
  margin: auto;
}
h1 {
  font-family: 'Encode Sans', sans-serif;
  letter-spacing: 1.5px;
  padding-bottom: 20px;	 
}
`;
