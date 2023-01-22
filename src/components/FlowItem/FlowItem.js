import styled from 'styled-components';

export default function FlowItem({ description, value, date, type }) {
    return (
        <Item type={type}>
           <div><span>{date}</span> {description}</div>
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
  }
`;
