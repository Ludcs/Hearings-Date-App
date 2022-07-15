import styled from 'styled-components';

export const OnlyHearings = ({el, index, lengthHearings}) => {
  console.log('lenghtHearings', lengthHearings);
  console.log('index', index);

  return (
    <ContainerHearing lengthHearings={lengthHearings} index={index}>
      <p>
        <span>{el.fecha2} •</span> {el.hora.slice(0, 5)} hs
      </p>
      <p id="text_name">{el.nombre}</p>
      <p>
        {lengthHearings} - {index}
      </p>
    </ContainerHearing>
  );
};

const ContainerHearing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 50px;
  border-bottom: ${(props) =>
    props.lengthHearings === props.index + 1
      ? 'none'
      : '1px solid rgb(223, 224, 218)'};
  background-color: #f8a5c2;
  padding: 10px 10px;
  width: 112%;

  & #text_name {
    font-size: 18px;
    font-weight: normal;
    line-height: 22px;
    padding: 0px;
    margin: 0px;
    margin-top: 6px;
    color: #303952;
  }

  & p {
    font-weight: 900;
    font-size: 14px;
    line-height: 14px;
    color: #303952;

    & span {
      color: #e66767;
    }
  }
`;
