import styled from "styled-components"
import MainLogo from "../../assets/logo.png"
import MainBanner from "../../assets/banner.png"
import Racoes from "../../assets/racoes.PNG"
import Brinquedos from "../../assets/brinquedos.PNG"
import Acessorios from "../../assets/acessorios.PNG"
import { useState } from "react"

import { BiSearch } from "react-icons/bi"
import { FaShoppingCart } from "react-icons/fa"
import { RiAccountPinCircleFill } from "react-icons/ri"
import { GiHamburgerMenu } from "react-icons/gi"

const HeaderContainer = styled.header`

`

const PreHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: row;
width: 100%;
max-width: 1170px;
padding: 20px 0;
margin: 0 auto;

@media (max-width: 1024px) {
    flex-direction: column;
}
`

const SearchContainer = styled.div`
position: relative;

input {
    width: 198px;
    height: 45px;
}


@media (max-width: 1024px) {
    display: none;
}
`
const SearchIcon = styled(BiSearch)`
position: absolute;
top: 6px;
right: 0px;
font-size: 35px;
color: #7f7f7f;
`

const LeftIcons = styled.div`
cursor: pointer;
color: #7f7f7f;
font-size: 30px;
`

const Navbar = styled.nav`
background: #8158c5;
height: 50px;
display: flex;
align-items: center;

div {
    display: flex;
    width: 100%;
    max-width: 1170px;
    justify-content: space-around;
    margin: 0 auto;
}
div > a {
    color: #fff;
    text-decoration: none;
}

@media (max-width: 768px) {
    a {
        display: none;
    }
}
`

const Logo = styled.img`
`

const BannerContainer = styled.div`
width: 100%;
`

const Banner = styled.img`
width: 100%;
`

const CategoriesContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 136px;
background: #ffa200;
margin-top: -4px;


@media (max-width: 1024px) {
    height: auto;
}
`

const CategoriesWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 1170px;
margin: 0 auto;

@media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: none;
}
`

const Categories = styled.a`

margin: auto;
    img {
    width: 90%;
    padding: 0 0 0 20px;
    height: 100px;
    margin: 0 auto;
    cursor: pointer;
    }
`

const HamburgerBtn = styled(GiHamburgerMenu)`
  position: relative;
  color: #ffa200;
  background-color: transparent;
  font-size: 35px;
  cursor: pointer;
  display: none;
  @media only Screen and (max-width: 48em) {
    display: inline-block;
  }
`

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  background: rgba(53, 53, 63, 0.95);
  border-radius: 20px;
  margin: 0.5rem;
  overflow-x: hidden;
  z-index: 999;
  a {
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
    margin: 1.5rem;
    cursor: pointer;
    text-decoration: none;
  }
`

const Header = () => {
    const [click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click)

    return (
        <HeaderContainer>
            <PreHeader>
                <SearchContainer>
                <input type="search" placeholder="Pesquisar..." name="gsearch" />
                <SearchIcon />
                </SearchContainer>

                <Logo src={MainLogo} />

                <LeftIcons>
                    <RiAccountPinCircleFill />
                    <FaShoppingCart />
                </LeftIcons>

            </PreHeader>
            <Navbar>
                <div>
                    <a href="#">Inicio</a>
                    <a href="#">Produtos</a>
                    <a href="#">Categorias</a>
                    <a href="#">Contato</a>
                    <a href="#">Sobre</a>
                    <HamburgerBtn onClick={() => handleClick()} clicked={click}>
        <span />
      </HamburgerBtn>
                </div>
            </Navbar>
            <MobileMenu clicked={click}>
                    <a href="#" onClick={() => handleClick()}>Inicio</a>
                    <a href="#" onClick={() => handleClick()}>Produtos</a>
                    <a href="#" onClick={() => handleClick()}>Categorias</a>
                    <a href="#" onClick={() => handleClick()}>Contato</a>
                    <a href="#" onClick={() => handleClick()}>Sobre</a>
            </MobileMenu>
            <BannerContainer>
                <Banner src={MainBanner} />
            </BannerContainer>
            <CategoriesContainer>
                <CategoriesWrapper>
                    <Categories href="#"><img src={Racoes} alt="Rações" /></Categories>
                    <Categories href="#"><img src={Brinquedos} alt="Brinquedos" /></Categories>
                    <Categories href="#"><img src={Acessorios} alt="Acessórios" /></Categories>
                </CategoriesWrapper>
            </CategoriesContainer>
        </HeaderContainer>
    )
}

export default Header
