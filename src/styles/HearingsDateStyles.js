import styled from 'styled-components';

export const ContainerHearingsDate = styled.div`
  //background-color: rgb(246, 247, 243);
  display: flex;
  //justify-content: center;
  //flex-direction: column;
  border-radius: 12px 12px 12px 12px;
  border-bottom: 1px solid rgb(223, 224, 218);
  border-left: 1px solid rgb(223, 224, 218);
  border-right: 1px solid rgb(223, 224, 218);
  border-top: 1px solid rgb(223, 224, 218);
  margin-bottom: 20px;
  height: auto;
  outline: none;
`;

export const ContainerOnlyDate = styled.div`
  background-color: rgb(246, 247, 243);
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  width: 10%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10px;
  padding-top: 5px;

  & p {
    color: rgb(95, 97, 89);
    font-size: 12px;
    font-weight: 500;
    margin-top: 7px;
  }

  & h2 {
    color: rgb(95, 97, 89);
    font-weight: 900;
    font-size: 25px;
  }
`;

export const ContainerRest = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;

  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 50px;
    border-bottom: 1px solid rgb(223, 224, 218);
    padding: 10px 10px;
    width: 112%;

    & #text_name {
      font-size: 18px;
      font-weight: normal;
      line-height: 22px;
      padding: 0px;
      margin: 0px;
      margin-top: 6px;
      color: rgb(95, 97, 89);
    }

    & p {
      font-weight: 900;
      font-size: 14px;
      line-height: 14px;
      color: rgb(95, 97, 89);

      & span {
        color: rgb(184, 186, 177);
      }
    }
  }

  /* & li {
    align-items: center;
    justify-content: center;
    list-style: none;
    text-align: start;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 5px;
    padding-right: 5px; */

  /* & span {
    color: rgb(184, 186, 177);
  } */
`;
