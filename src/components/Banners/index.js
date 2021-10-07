import styled from 'styled-components'
import ParaGatos from "../../assets/paraGatos.PNG"
import ParaCachorros from "../../assets/paraCachorros.PNG"

const BannersContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 1170;
margin: 0 auto;

@media (max-width: 1024px) {
    flex-wrap: wrap;
}

`
const Banner = styled.img`
width: 100%;
padding: 65px 10px 15px 10px;
margin: 0 auto;

@media (max-width: 1024px) {
    padding: 0 5px;
}
` 

const Banners = () => {
    return (
        <BannersContainer>
            <a href="#"><Banner src={ParaGatos} alt="Para Gatos" /></a>
            <a href="#"><Banner src={ParaCachorros} alt="Para Cachorros" /></a>
        </BannersContainer>
    )
}

export default Banners
