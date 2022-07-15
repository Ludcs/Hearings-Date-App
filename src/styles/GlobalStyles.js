import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Chakra Petch', sans-serif;
}
body {
  width: 100%;
  margin: auto;
  background: #63cdda;
}
h1 {
  font-family: 'Chakra Petch', sans-serif;
  letter-spacing: 1.5px;  
}
`;
