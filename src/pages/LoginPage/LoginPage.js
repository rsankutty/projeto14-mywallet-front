
import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import axios from "axios"

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

   async function handleLogin(e) {
        e.preventDefault()
        setIsLoading(true)

        const URL = `${process.env.REACT_APP_API_URL}/login`;
		const body = form;

		try {
			const res = await axios.post(URL, body);
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('name', res.data.name)
			navigate('/home');
		} catch (err) {
            setIsLoading(false)
			alert(err.response.data);
		}
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <StyledForm onSubmit={handleLogin}>
                <StyledInput
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    required
                    disabled={isLoading}
                    value={form.email}
                    onChange={handleForm}
                />
                <StyledInput
                    name="password"
                    placeholder="Senha"
                    type="password"
                    required
                    disabled={isLoading}
                    value={form.password}
                    onChange={handleForm}
                />
                <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Entrar"}
                </StyledButton>
            </StyledForm>

            <StyledLink to="/sign-up">
                Primeira vez? Cadastre-se!
            </StyledLink>
        </Container>
    )
}