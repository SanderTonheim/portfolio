import styled, { createGlobalStyle } from 'styled-components'
import { Footer } from './Footer'

export const GlobalStyles = createGlobalStyle`

* {
  padding: 0px;
  margin: 0px;
	height: auto;
	width: 100%;
}

body {
	height: 100%;
  max-width: 100%;
}

.nav {
  background-color: #333;
	color: #fff;
	width: 100%;
	height: 5rem;
	padding: 0px;
	

	ul {
		padding: 0px;
		width: 100%;
		height: inherit;
		list-style-type: none;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}
	li {
		padding: 0 4rem;
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
export const StyledFooter = styled(Footer)`
	background-color: #333;
	color: #fff;
	max-width: 100%;
	height: 7rem;
	display: flex;
	justify-content: center;
	justify-content: space-around;

	
	h4,
	p {
		align-self: center;
		flex-basis: content;
	}
`
