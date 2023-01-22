import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  color: white;
  width: 326px;
  height: 700px;
  font-family: 'Raleway', sans-serif;

  h1 {
    color: white;
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 26px;
  font-weight: 700;
  img{
    width: 30px;
  }
`
export const Content = styled.div`
  background-color: white;
  height: 446px;
  width: 326px;
  border-radius: 5px;
  margin-top: 20px;
  padding: 12px;
  position: relative;
  display: flex;
  align-items: center;
`
export const NoRegister= styled.div`
  margin: auto;
  width: 180px;
  text-align: center;
  font-size: 20px;
  color: #868686;
`

export const ItemWrapper = styled.div`
  overflow-y: scroll;
  height: 390px;
  background-color: yellow;
`
export const Item = styled.div`
  color: black;
`
export const SaldoWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 15px;
  bottom: 10px;
  font-weight: 700;
  font-size: 17px;
  color: black;
`

export const StyledButton = styled.div`
  background: #A328D6;
  border-radius: 5px;
  width: 155px;
  height: 114px;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 700;
  font-size: 17px;

  img{
    width: 25px;
    height: 25px;
  }

`
export const ButtonContainer = styled.div`
  margin-top: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  `

export const TextWrapper = styled.div`
  width: 70px;
  word-wrap: break-word;
  `