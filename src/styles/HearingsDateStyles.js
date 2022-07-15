import styled from 'styled-components';

export const ContainerHearingsDate = styled.div`
  display: flex;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  margin-bottom: 20px;
  height: auto;
  outline: none;
`;

export const ContainerOnlyDate = styled.div`
  background-color: #f7d794;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
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

  & div {
  }
`;
