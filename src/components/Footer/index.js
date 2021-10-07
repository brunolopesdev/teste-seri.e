import styled from 'styled-components'
import PawIcon from "../../assets/newsIcon.png"
import FooterLogo from "../../assets/logo.png"
import PaymentMethodos from "../../assets/pagamento.png"
import SerieLogo from "../../assets/seri.e.png"
import UpArrow from "../../assets/upArrow.png"
import WhatsappIcon from "../../assets/whatsappIcon.png"
import {FaFacebook, FaInstagramSquare, FaTwitterSquare} from "react-icons/fa"

const FooterContainer = styled.footer`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100%;
`
const FooterWrapper = styled.div`
display: flex;
justify-content: space-around;
width: 100%;
max-width: 1170px;
padding: 30px 10px;
margin: 0 auto;

h2 {
    font-weight: 700;
    font-size: 13px;
    color: #8158c5;
}


@media (max-width: 1024px) {
    flex-wrap: wrap;

    div {
        width: 50%;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
}
`
const SocialWrapper = styled.div`
display: flex;
flex-direction: column;
text-align: center;
p {
    color: #7d7d7d;
    font-size: 10px;
}

img {
    width: 100%;
}
`

const Social = styled.div`
display: flex;
justify-content: center;
color: #7d7d7d;

a {
    padding: 20px 15px;
    font-size: 30px;
    color: #7d7d7d;
}

a:hover {
    color: #ffa200;
}
`
const About = styled.div`
display: flex;
flex-direction: column;
font-size: 14px;
line-height: 2.2;

a {
    font-size: 12px;
    text-decoration: none;
    color: #7d7d7d;
    font-weight: 600;
}
`
const Contact = styled.div`
    line-height: 2;
    font-size: 12px;
    text-decoration: none;
    color: #7d7d7d;
    font-weight: 600;
`

const Payment = styled.div`
    img {
        width: 100%;
    }
`

const PreFooter = styled.div`
width: 100%;
background: #8158c5;

`
const FooterInfo = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100%;
max-width: 1170px;
margin: 0 auto;
padding: 10px 0;


@media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
}
`

const InfoText = styled.p`
color: #fff;
text-transform: uppercase;
font-size: 13px;
`

const Line = styled.hr`
width: 100%;
max-width: 1170px;
border: 0;
border: 1px solid #ffa200;
`

const BottomLine = styled.hr`
width: 100%;
max-width: 1170px;
border: 0;
border: 1px solid #dfdfdf;
`

const SerieInfo = styled.div`
display: flex;
align-items: center;

img {
    width: 100%;
    height: 50%;
    max-width: 50px;
}

p {
    font-size: 10px;
    font-weight: 600;
    padding: 10px 20px;
    color: #7d7d7d;
}
`

const NewsletterWrapper = styled.div`
position: relative;
text-align: center;
color: #fff;
padding: 20px 0;
margin: 0 auto;
max-width: 1170px;
`
const FixedButtons = styled.div`
display: flex;
flex-direction: column;
position: absolute;
right: 0;
transform: translateY(-62%);
`

const Title = styled.h1`
font-size: 23px;
`

const Subtitle = styled.h3`
font-size: 15px;
font-weight: 300;
`

const Subscribe = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 50px 0 0 0;
margin: 0 auto;

input {
    border: 0;
    outline: 0;
    background: transparent;
    border-bottom: 1px solid #fff;
    margin-right: 10px;
    margin-top: 10px;

        &::placeholder{
            color: #fff;
        }
}

button {
    text-transform: uppercase;
    color: #fff;
    font-weight: 600;
    background: #ffa200;
    border: none;
    width: 75px;
    height: 35px;
    cursor: pointer;
    margin-top: 5px;
}

@media (max-width: 1024px) {
    flex-direction: column;
}
`

const Footer = () => {
    return (
        <>
        <PreFooter>
            <FooterInfo>
                <InfoText><img src={PawIcon} alt="Icone de Patinha"/><strong>Entrega gratuita</strong> a partir de R$99</InfoText>
                <InfoText><img src={PawIcon} alt="Icone de Patinha"/><strong>Parcelamento</strong> sem juros</InfoText>
                <InfoText><img src={PawIcon} alt="Icone de Patinha"/><strong>Cadastre-se</strong> e ganhe desconto</InfoText>
            </FooterInfo>

            <Line />

            <NewsletterWrapper>
                <Title>ASSINE NOSSA NEWSLETTER</Title>

                <Subtitle>Cadastre-se para receber nossas novidades e descontos exclusivos!</Subtitle>

                <Subscribe>
                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="E-mail"/>
                    <button>Enviar</button>
                </Subscribe>

                <FixedButtons>
                    <a href="#"><img src={UpArrow} alt="Seta para o topo" /></a>
                    <a href="#"><img src={WhatsappIcon} alt="Icone de Whatsapp" /></a>
                </FixedButtons>

            </NewsletterWrapper>
        </PreFooter>

        <FooterContainer>
            <FooterWrapper>
                <SocialWrapper>
                    <img src={FooterLogo} alt="Logo do Footer" />

                    <Social>
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaInstagramSquare /></a>
                        <a href="#"><FaTwitterSquare /></a>
                    </Social>

                    <p>&copy; 2021 . CNPJ 00.000.000/0000-00</p>
                    <p>Rua Tal de Tal, 123 - São Paulo, SP.</p>
                </SocialWrapper>

                <About>
                    <h2>PET STORE</h2>
                    <a href="#">Quem Somos</a>
                    <a href="#">Como Comprar</a>
                    <a href="#">Trocas e Devoluções</a>
                    <a href="#">Frete e Entregas</a>
                </About>

                <Contact>
                    <h2>CONTATO</h2>
                    <p>&#40;99&#41; 9999-9999</p>
                    <p>&#40;99&#41; 9999-9999</p>
                    <p>petstore@petstore.com.br</p>
                </Contact>

                <Payment>
                    <h2>PAGAMENTO</h2>
                    <img src={PaymentMethodos} alt="Métodos de Pagamento" />
                </Payment>

            </FooterWrapper>

            <BottomLine />

            <SerieInfo>
                <p>TECNOLOGIA E DESENVOLVIMENTO</p>
                <img src={SerieLogo} alt="Logo Serie Design" />
            </SerieInfo>
        </FooterContainer>
        </>
    )
}

export default Footer
