import styled from 'styled-components'

const CardContainer = styled.div`
    display: flex;
    max-width: 350px;
    min-height:400px;
    transition: 0.3s;
    border-radius: 5px;
    align-items:center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
     &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`
export { CardContainer }