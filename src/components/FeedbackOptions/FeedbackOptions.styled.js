import styled from 'styled-components';

export const Btn = styled.button`
width: 90px;
height: 35px;
margin: 15px;
font-size: 16px;
font-weight: 500;
border: none;
outline: none;
border-radius: 4px;
 color:rgb(255, 255, 255);
  background-color: rgb(248, 3, 118);
  border: 1px solid rgb(255, 255, 255);
cursor: pointer;
text-Shadow: 1px 0 1px #ffffff6f;
transform: scale(1.1);
letter-spacing: 2px;
transition: transform 250ms;
&:hover {
  transform: scale(0.9);
  font-weight: normal;
  text-transform: uppercase;
  color: rgb(248, 3, 118);
background-color: rgb(255, 255, 255);
border: 1px solid rgb(248, 3, 118);
letter-spacing: 0;
transition: transform 500ms;
}
&:not(:last-child) {
  margin-right: 15px;
}
`;
