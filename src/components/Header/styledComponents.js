import styled from 'styled-components'

export const NavLogo = styled.img`
  width: 20%;
`
export const NavbarSmallContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDarkMode ? '#212121' : '#f4f4f4')};
`
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`
