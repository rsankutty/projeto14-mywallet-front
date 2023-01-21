import { Container, Header } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import { useNavigate } from "react-router-dom"
import apiAuth from "../../services/apiAuth"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"

export default function AddPage() {
    const [form, setForm] = useState({ value: "", description: "" })
    const [isLoading, setIsLoading] = useState(false)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleLogin(e) {
        e.preventDefault()
        setIsLoading(true)

        apiAuth.login(form)
            .then(res => {
                const { id, name, image, token } = res.data
                setIsLoading(false)
                setUser({ id, name, image, token })
                // localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify({ id, name, image, token }))
                navigate("/home")
            })
            .catch(err => {
                setIsLoading(false)
                alert(err.response.data.message)
            })
    }

    return (
        <Container>
            <Header>
                Nova entrada
            </Header>
            <StyledForm onSubmit={handleLogin}>
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

