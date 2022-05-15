export const getAudiences = async () => {
  const url = 'http://api.juiciosdelesahumanidad.ar/api/v1.0/historico/agenda';

  const resp = await fetch(url);

  const {resultado} = await resp.json();

  const audience = resultado.agenda.map((aud) => {
    return {
      id: aud.id,
      fecha: aud.proxima_audiencia,
      hora: aud.hora,
      nombre: aud.caus_nombre_vulgar,
    };
  });

  console.log(audience);
};
