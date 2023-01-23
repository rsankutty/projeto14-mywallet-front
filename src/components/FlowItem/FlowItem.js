import styled from 'styled-components';

export default function FlowItem({ description, value, date, type }) {
    return (
        <Item type={type}>
           <ItemContainer><span>{date}</span> <h3>{description}</h3></ItemContainer>
            <p>{value.toFixed(2)}</p>
        </Item>
    );
}

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  span{
    color: #C6C6C6;
    margin-right: 5px;
  }
  color: black;
  p{
    color: ${props => props.type === 'inlet' ? '#03AC00' :'#C70000' };
    word-break: break-word;
    max-width: 90px;
  }
  h3{
    word-break: break-word;
  }
`;

export const ItemContainer = styled.div`
width: 200px;
display: flex;
flex-direction: row;
`;