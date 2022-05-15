import moment from 'moment';
import {
  ContainerHearingsDate,
  ContainerOnlyDate,
  ContainerRest,
} from '../styles/HearingsDateStyles';

moment.locale('es');

export const HearingsDate = ({item, index, lengthData}) => {
  return (
    <ContainerHearingsDate>
      <ContainerOnlyDate>
        <h2>{item.fecha.slice(0, 2)}</h2>
        <p>{item.fecha.slice(2, 7)}</p>
      </ContainerOnlyDate>
      <ContainerRest>
        {item.hearings.map((el) => (
          <div key={el.id}>
            <p>
              <span>{el.fecha2} •</span> {el.hora.slice(0, 5)} hs
            </p>
            <p id="text_name">{el.nombre}</p>
          </div>
        ))}

        {/* <p>{item.hearings.map((hour) => hour.hora.slice(0, 5))}</p>
        <p>{item.hearings.map((name) => name.nombre)}</p> */}
      </ContainerRest>
    </ContainerHearingsDate>
  );
};
