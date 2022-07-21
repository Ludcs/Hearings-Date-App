import styled from 'styled-components';

export const ContainerHearingsDate = styled.div`
  display: flex;
  margin-bottom: 20px;
  height: auto;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;

export const ContainerOnlyDate = styled.div`
  background-color: #f7d794;
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-top: 5px;

  & h2 {
    color: #e66767;
    font-weight: 900;
    font-size: 25px;
  }

  & p {
    color: #e66767;
    font-size: 12px;
    font-weight: 500;
    margin-top: 7px;
  }
`;

export const ContainerRest = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;
