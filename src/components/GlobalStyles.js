import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`



* {
  padding: 0;
  margin: 0;
}

body {
	height: 100%;
  width: 100%;
}

.nav {
  background-color: #333;
	color: #fff;
	width: 100%;
	height: 5rem;
	padding: 0px;

	ul {
		padding: 0;
		width: auto;
		height: 100%;
		list-style-type: none;
		margin: 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 1rem;
	}
	li {
		padding: 0 1rem;
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
