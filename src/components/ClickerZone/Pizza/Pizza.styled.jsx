import styled from "@emotion/styled";


export const StyledPizza = styled.button`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-image: url(${({currentStage}) => currentStage});
    background-size: cover;
    border: none;
    margin-bottom: 20px;
    &:hover{
        filter: brightness(1.1)
    }
    &:active{
        filter: brightness(1)
    }
`