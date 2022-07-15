import {useEffect, useState} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'moment/locale/es';
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
  }, [dateFrom, dateTo]); // eslint-disable-line react-hooks/exhaustive-deps

  const getAudiences = async () => {
    const url = `http://api.juiciosdelesahumanidad.ar/api/v1.0/historico/agenda/fecha/${dateFrom}/${dateTo}`;

    const resp = await fetch(url);
    const {resultado} = await resp.json();

    const audience = resultado.agenda.map((aud) => ({
      fecha: moment(aud.proxima_audiencia).format('D ddd MM/YY').toUpperCase(),
      fecha2: moment(aud.proxima_audiencia).format('DD/MM/YY'),
      id: aud.id,
      hora: aud.hora,
      nombre: aud.caus_nombre_vulgar,
    }));

    const result = audience.reduce((acum, item) => {
      let {fecha, ...rest} = item;
      let exist = acum.find((x) => x.fecha === fecha);
      if (!exist) {
        exist = {fecha, hearings: []};
        acum.push(exist);
      }
      exist.hearings.push(rest);
      return acum;
    }, []);

    setDateArr(result);
    console.log('Resultado', result);
  };

  /* const arrayDateMaker = (arrayDates) => {
        const arrayOfDate = arrayDates.map((item) => {
            return item.proxima_audiencia
        })
        const arr = arrayOfDate.filter(function (item, index, inputArray) {
            return inputArray.indexOf(item) == index
        })
      return arr.map((item) => {
            return {
                date: item,
                hearings: arrayDates.filter((subItem) => {
                    return subItem.proxima_audiencia === item
                }),
            }
        })
    } */

  /*   const dateFormate = (date, type) => {
    //Validar:
    if (type === 1) {
      //devolver tipo de fecha 1 para mandarle a la API
      setDateFrom(date);
    }
    if (type === 2) {
      //devolver tipo de fecha 2 para mostrar en el front
      setDateTo(date);
    }
    return null;
  }; */

  const handleDateFromChange = (date) => {
    console.log(date);
    setDateFrom(date);
  };

  const handleDateToChange = (date) => {
    console.log(date);
    setDateTo(date);
  };

  return (
    <>
      <GlobalStyle />
      <MainContainerApp>
        <h1>Agenda de audiencias - Date Picker App </h1>

        <ContainerDatePickers>
          <ContainerPickerFrom>
            <label>Desde:</label>
            <StyledDatePicker
              selected={dateFrom}
              onChange={handleDateFromChange}
              //onChange={(date) => dateFormate(date, 1)}
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
              //onChange={(date) => dateFormate(date, 2)}
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
