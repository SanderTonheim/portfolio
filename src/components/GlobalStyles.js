import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
	height: auto;
	width: 100%;
}

body {
	height: auto;
  width: 100%;
}

.nav {
  background-color: #333;
	color: #fff;
	width: 100%;
	height: 5rem;
	padding: 0px;
	

	ul {
		padding: 0px;
		width: inherit;
		height: inherit;
		list-style-type: none;
		display: flex;
	}
	li {
		padding: 0 1rem;
	width: 3rem;
	}
  a {
    color:#fff;
    text-decoration: none;
		

  }
}
`
export const Headline1 = styled.h1`
	font-size: 5rem;
	color: black;
	text-align: center;
`
export const Headline2 = styled.h2`
	font-size: 3rem;
	color: black;
	text-align: center;
`
