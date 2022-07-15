import moment from 'moment';
import {
  ContainerHearingsDate,
  ContainerOnlyDate,
  ContainerRest,
} from '../styles/HearingsDateStyles';
import {OnlyHearings} from './OnlyHearings';

moment.locale('es');

export const HearingsDate = ({item, lengthHearings}) => {
  return (
    <ContainerHearingsDate>
      <ContainerOnlyDate>
        <h2>{item.fecha.slice(0, 2)}</h2>
        <p>{item.fecha.slice(2, 7)}</p>
      </ContainerOnlyDate>
      <ContainerRest>
        {item.hearings.map((el, index) => (
          <OnlyHearings
            key={el.id}
            el={el}
            index={index}
            lengthHearings={lengthHearings}
          />
        ))}
      </ContainerRest>
    </ContainerHearingsDate>
  );
};
