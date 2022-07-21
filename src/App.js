import {useEffect, useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'moment/locale/es';
import AgendaImg from '../src/agenda.jpg';
import {HearingsDate} from './components/HearingsDate';
import {GlobalStyle} from './styles/GlobalStyles';
import {
  ContainerDatePickers,
  ContainerHearingsMap,
  MainContainerApp,
  StyledDatePicker,
  ContainerPickerFrom,
  ContainerPickerTo,
} from './styles/AppStyles';

moment.locale('es');

const initialStateFrom = moment(new Date().getDate(), 'Do MMM YYYY').subtract(
  1,
  'week'
);
const initialStateTo = moment(new Date().getDate(), 'Do MMM YYYY');

export const App = () => {
  const [dateArr, setDateArr] = useState([]);
  const [dateFrom, setDateFrom] = useState(initialStateFrom);
  const [dateTo, setDateTo] = useState(initialStateTo);

  useEffect(() => {
    getAudiences();
    if (dateFrom > dateTo) {
      setDateTo(initialStateTo);
    }
    if (dateFrom === dateTo) {
      setDateTo(dateFrom);
    }
  }, [dateFrom, dateTo]);

  const getAudiences = async () => {
    const resp = await fetch(
      `http://api.juiciosdelesahumanidad.ar/api/v1.0/historico/agenda/fecha/${dateFrom}/${dateTo}`
    );
    const {resultado} = await resp.json();

    const audience = resultado.agenda.map((aud) => ({
      fecha: moment(aud.proxima_audiencia).format('D dddd MM/YY').toUpperCase(),
      fecha1: moment(aud.proxima_audiencia).format('dddd').toUpperCase(),
      fecha2: moment(aud.proxima_audiencia).format('DD/MM/YY'),
      id: aud.id,
      hora: aud.hora,
      nombre: aud.caus_nombre_vulgar,
      sede: aud.sede,
    }));

    const result = audience.reduce((acum, item) => {
      let {fecha, fecha1, ...rest} = item;
      let exist = acum.find((x) => x.fecha === fecha);
      if (!exist) {
        exist = {fecha, fecha1, hearings: []};
        acum.push(exist);
      }
      exist.hearings.push(rest);
      return acum;
    }, []);

    setDateArr(result);
  };

  const handleDateFromChange = (date) => {
    setDateFrom(date);
  };

  const handleDateToChange = (date) => {
    setDateTo(date);
  };

  return (
    <>
      <GlobalStyle />
      <MainContainerApp>
        <img src={AgendaImg} alt="Agenda img" />
        <h1>
          - DATE PICKER APP - <br /> ¡Una agenda para buscar fechas del pasado!
        </h1>
        <ContainerDatePickers>
          <ContainerPickerFrom>
            <label>Desde:</label>
            <StyledDatePicker
              selected={dateFrom}
              onChange={handleDateFromChange}
              dateFormat="D [de] MMMM [de] yyyy"
              locale="es-AR"
              maxDate={initialStateTo}
            />
          </ContainerPickerFrom>
          <ContainerPickerTo>
            <label>Hasta:</label>
            <StyledDatePicker
              selected={dateTo}
              onChange={handleDateToChange}
              dateFormat="D [de] MMMM [de] yyyy"
              locale="es-AR"
              maxDate={initialStateTo}
              minDate={dateFrom}
            />
          </ContainerPickerTo>
        </ContainerDatePickers>
        <ContainerHearingsMap>
          {dateArr.map((item, index) => (
            <HearingsDate
              key={index}
              item={item}
              index={index}
              lengthHearings={dateArr[index].hearings.length}
            />
          ))}
        </ContainerHearingsMap>
      </MainContainerApp>
    </>
  );
};
