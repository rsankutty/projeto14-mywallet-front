import { Container, Header } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import { useNavigate } from "react-router-dom"
import {  useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import arrow from "../../assets/arrow.svg"
import axios from "axios"

export default function InletPage() {
    const token = localStorage.getItem('token')

    const [form, setForm] = useState({ value: "", description: "" })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleInlet(e) {
        e.preventDefault()
        setIsLoading(true)


        const URL = `${process.env.REACT_APP_API_URL}/cashflow`;
        const body = { ...form, type: 'inlet' };
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        try {
            if (isNaN(Number(body.value))) {
                setIsLoading(false)
                alert("Digite um número válido (ex: 123.456)")
            } else {
                await axios.post(URL, body, config);
                navigate('/home');
            }
        } catch (err) {
            setIsLoading(false)
            alert(err.response.data);
        }
    }

    return (
        <Container>
            <Header>
                Nova entrada
                <img src={arrow} alt="go back symbol" onClick={() => navigate("/home")} />
            </Header>
            <StyledForm onSubmit={handleInlet}>
                <StyledInput
                    name="value"
                    placeholder="Valor"
                    type="text"
                    required
                    disabled={isLoading}
                    value={form.value}
                    onChange={handleForm}
                />
                <StyledInput
                    name="description"
                    placeholder="Descrição"
                    type="text"
                    required
                    disabled={isLoading}
                    value={form.description}
                    onChange={handleForm}
                />
                <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Salvar entrada"}
                </StyledButton>
            </StyledForm>
        </Container>
    )
}

