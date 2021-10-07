import styled from 'styled-components'
import CamaSuspensa from "../../assets/camaSuspensa.png"
import CamaCachorro from "../../assets/camaCachorro.png"
import BonecoDeGirafa from "../../assets/bonecoGirafa.PNG"
import CaixaDeAreia from "../../assets/caixaDeAreia.png"
import Selo50Off from "../../assets/selo50off.png"
import SeloNew from "../../assets/seloNew.png"

const NovidadesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
max-width: 1170px;
padding: 0 0 100px 0;
margin: 0 auto;
`
const Title = styled.h1`
font-weight: 700;
color: #7f7f7f;
text-transform: uppercase;
font-size: 30px;
`
const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
text-align: center;

@media (max-width: 1024px) {
    flex-wrap: wrap;
}
`
const ProductCard = styled.div`
width: 25%;
box-sizing: border-box;

@media (max-width: 1024px) {
    width: 33%;
}

@media (max-width: 768px) {
    width: 50%;
}

@media (max-width: 520px) {
    width: 100%;
}
`
const ProductImage = styled.div`
padding: 10px;
position:relative;

img {
    vertical-align:top;
}

button {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    width: 144px;
    height: 42px;
    border: none;
    color: #fff;
    font-weight: 600;
    background: #ffa200;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
}

&:before {
    content:'';
    position:absolute;
    width:100%; height:100%;
    top:0; left:0;
    background:rgba(192,171,226,0.6);
    opacity:0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
}
&:before {
    opacity:0;
}
&:hover:before {
    opacity:1;
}
&:hover button {
    opacity: 1;
}

`
const Name = styled.h3`
color: #7d7d7d;
font-weight: 300;
font-size: 20px;
`
const Price = styled.p`
text-decoration: line-through;
color: #7d7d7d;
font-size: 15px;
`
const NormalPrice = styled.p`
font-size: 15px;
color: #7d7d7d;
`
const BestPrice = styled.p`
font-weight: 700;
color: #7d7d7d;
font-size: 15px;
`
const Selo = styled.img`
position: absolute;
left: 0;
top: 0;
`


let produtos = [
    {
        "id": 1,
        "name": "Cama Suspensa",
        "image": CamaSuspensa,
        "price": 100,
        "bestPrice": 50,
        "selo": null
    },
    {
        "id": 2,
        "name": "Cama para Cachorro",
        "image": CamaCachorro,
        "price": 250,
        "bestPrice": 125,
        "selo": Selo50Off
    },
    {
        "id": 3,
        "name": "Boneco de Girafa",
        "image": BonecoDeGirafa,
        "price": 200,
        "bestPrice": 125,
        "selo": null
    },
    {
        "id": 4,
        "name": "Caixa de Areia Grande",
        "image": CaixaDeAreia,
        "price": 120,
        "bestPrice": 105,
        "selo": SeloNew
    },
    {
        "id": 5,
        "name": "Cama Suspensa",
        "image": CamaSuspensa,
        "price": 100,
        "bestPrice": 50,
        "selo": null
    },
    {
        "id": 6,
        "name": "Cama para Cachorro",
        "image": CamaCachorro,
        "price": 150,
        "bestPrice": 75,
        "selo": null
    },
    {
        "id": 7,
        "name": "Boneco de Girafa",
        "image": BonecoDeGirafa,
        "price": 75,
        "bestPrice": 30,
        "selo": null
    },
    {
        "id": 8,
        "name": "Caixa de Areia Grande",
        "image": CaixaDeAreia,
        "price": 300,
        "bestPrice": 250,
        "selo": null
    }
]
const Destaques = () => {
    return (
        <NovidadesContainer>
            <Title>Destaques</Title>
            <ProductWrapper>
                {produtos.map((el, index) => {
                    return (
                        <ProductCard key={el.id}>

                            <ProductImage>
                                {el.selo ? <Selo src={el.selo} alt="Selo informativo" /> : null}
                                <img src={el.image} alt={el.name} />
                                <button href="#">compra rápida</button>
                            </ProductImage>

                            <Name>{el.name}</Name>
                            {el.bestPrice ? (
                                <>
                                    <Price>R${el.price}</Price>
                                    <BestPrice>R${el.bestPrice}</BestPrice>
                                </>
                            )

                                :

                                <NormalPrice>R${el.price}</NormalPrice>}

                        </ProductCard>
                    )
                })}

            </ProductWrapper>
        </NovidadesContainer>
    )
}

export default Destaques
