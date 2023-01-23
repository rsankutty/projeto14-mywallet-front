import { ButtonContainer, Container, Content, Header, ItemWrapper, NoRegister, SaldoWrapper, StyledButton, TextWrapper } from "./styled"
import home from "../../assets/home.svg"
import plus from "../../assets/plus.svg"
import minus from "../../assets/minus.svg"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from "axios";
import FlowItem from "../../components/FlowItem/FlowItem";


export default function HomePage() {
    const navigate = useNavigate();
    const [cashflows, setCashFlows] = useState([]);
    const [balance, setBalance] = useState(0);

    const token = localStorage.getItem('token')
    const name = localStorage.getItem('name')

    useEffect(() => {
        async function getCashFlow() {
            const URL = `${process.env.REACT_APP_API_URL}/cashflow`;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const flowItems = await axios.get(URL, config);
                setCashFlows(flowItems.data);
                let saldo = 0
                flowItems.data.map(item => {
                    item.type === "inlet" ? saldo += Number(item.value) : saldo -= Number(item.value)
                })
                setBalance(saldo)
            } catch (err) {
                alert(err.response.data);
            }
        };
        getCashFlow()
    }, []);

    function exitApp() {
        localStorage.clear()
        navigate('/')
    }


    return (
        <Container>
            <Header>
                Olá, {name}
                <img src={home} alt="home symbol" onClick={exitApp} />
            </Header>
            <Content>
                {cashflows.length !== 0 ?
                    <ItemWrapper>
                        {cashflows.map(item =>
                            <FlowItem
                                key={item._id}
                                description={item.description}
                                value={Number(item.value)}
                                date={item.date}
                                type={item.type}
                            />)}
                    </ItemWrapper>
                    :
                    <NoRegister>
                        Não há registros de entrada ou saída
                    </NoRegister>
                }
                <SaldoWrapper balance={balance} >
                    SALDO
                    <p>{balance.toFixed(2)}</p>
                </SaldoWrapper>
            </Content>
            <ButtonContainer>
                <StyledButton onClick={()=> navigate("/inlet")}>
                    <img src={plus} alt="plus symbol" />
                    <TextWrapper>
                        Nova entrada
                    </TextWrapper>
                </StyledButton>
                <StyledButton onClick={()=> navigate("/outlet")}>
                    <img src={minus} alt="minus symbol" />
                    <TextWrapper>
                        Nova saída
                    </TextWrapper>
                </StyledButton>
            </ButtonContainer>
        </Container>

    )
}