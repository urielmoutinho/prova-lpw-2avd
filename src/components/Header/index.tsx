import {Content, Container} from "./styles"
import logo from "../../assets/Leãozinho-Logo-1.png"

export function Header(){
 return(
    <Container>
        <Content>
            <img alt="logo" src={logo}/>
            <button className="botaum">incluir</button>
        </Content>

    </Container>


 )

}