import { useNavigate  } from "react-router-dom";

import bannerImage from 'src/assets/banner.png'

import { Button } from '../../componentes/Button';

import { Header } from '../../componentes/Header';

import { Container, Title, TitleHighlight, TextContent } from './styles';
import React from "react";

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header  autenticado={false}/>
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente <br />
                    </TitleHighlight>
                o seu futuro global agora!</Title>
                <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                     desafio profissional, evoluindo em comunidade com os melhores experts.</TextContent>
                <Button title="Começar agora" variant="secondary" onClick={handleClickSignIn} />
            </div>
            <div>
                <img src={bannerImage} alt="Imagem principal do site." />
            </div>
        </Container>
    </>)
}

export { Home }