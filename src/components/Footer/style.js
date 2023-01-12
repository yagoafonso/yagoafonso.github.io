import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 120px;
  height: 10vh;
  padding: 20px;
  width: 100%;
  bottom: 0;
  left: 0;
  p{
    text-align: center;
    white-space: nowrap;

  }
  div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;

    height: 40px;
    width: 300px;
    
  }
  `
  export const ContainerButton = styled.a`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    svg{
      width: 20px;
      height: 20px;
    }
  `