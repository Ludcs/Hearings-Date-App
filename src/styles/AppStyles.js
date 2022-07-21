import styled from 'styled-components';
import DatePicker from 'react-datepicker';

export const MainContainerApp = styled.div`
  width: 80vw;
  margin: auto;
  min-width: 600px;
  max-width: 1200px;
  height: auto;
  padding: 30px;
  text-align: center;

  & img {
    width: 90%;
    object-fit: contain;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 5px 0px;
    margin-bottom: 30px;
  }

  & h1 {
    width: 90%;
    margin: auto;
    text-align: center;
    text-transform: capitalize;
    color: #303952;
    font-weight: bold;
    font-size: 27px;
    letter-spacing: -0.5px;
  }
`;

export const ContainerDatePickers = styled.div`
  display: flex;
  width: 90%;
  height: 70px;
  margin: auto;
  padding-top: 25px;
  padding-bottom: 10px;
  justify-content: center;
  align-items: center;

  & label {
    margin-right: 5px;
    margin-left: 15px;
    font-weight: 700;
    font-size: 14px;
  }
`;

export const ContainerPickerFrom = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid rgb(184, 186, 177);

  height: 100%;
  background: rgb(246, 247, 243);
`;
export const ContainerPickerTo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid rgb(184, 186, 177);
  height: 100%;
  background: rgb(246, 247, 243);
`;

export const StyledDatePicker = styled(DatePicker)`
  background-color: transparent;
  border: none;
  font-family: 'Encode Sans', sans-serif;
  font-size: 14px;
  &:hover {
    cursor: pointer;
  }
`;

export const ContainerHearingsMap = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;
