import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #9259BD;
  height: 800px;

  h1 {
    color: white;
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
  }

  @media screen and (min-width: 800px) {
    img {
      margin-top: 100px;
    }
  }
`