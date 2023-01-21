import { ButtonContainer, Container, Content, Header, Item, ItemWrapper, NoRegister, SaldoWrapper, StyledButton, TextWrapper } from "./styled"
import home from "../../assets/home.svg"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"

export default function HomePage() {

    return (
        <Container>
            <Header>
                Olá, fulano
                <img src={home} alt="home symbol" />
            </Header>
            <Content>
                <NoRegister>
                    Não há registros de entrada ou saída
                </NoRegister>
                {/* <ItemWrapper>
                    <Item>fdafd</Item>
                </ItemWrapper> */}
                <SaldoWrapper>
                    SALDO
                    <p>432</p>
                </SaldoWrapper>
            </Content>
            <ButtonContainer>
                <StyledButton>
                    <img src={plus} alt="plus symbol" />
                    <TextWrapper>
                        Nova entrada
                    </TextWrapper>
                </StyledButton>
                <StyledButton>
                    <img src={minus} alt="minus symbol" />
                    <TextWrapper>
                        Nova saída
                    </TextWrapper>
                </StyledButton>
            </ButtonContainer>
        </Container>

    )
}