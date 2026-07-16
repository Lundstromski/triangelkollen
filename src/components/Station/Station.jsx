import './Station.scss';

const Station = ({ station }) => {
  const {
    name,
    elevation,
    services,
    openingPeriods,
  } = station;

  return (
    <article className="station-card">
      <header className="station-card__header">
        <h2 className="station-card__heading">{name}</h2>

        <span className="station-card__elevation">
          {elevation} m ö.h.
        </span>
      </header>

      <div className="station-card__services">
        <p>
          Restaurang:{' '}
          {services.restaurant.available ? 'Ja' : 'Nej'}
        </p>

        <p>
          Butik:{' '}
          {services.shop.available
            ? services.shop.type
            : 'Stängd'}
        </p>

        <p>
          Boende:{' '}
          {services.accommodation.available
            ? 'Ja'
            : 'Nej'}
        </p>
      </div>

      <div className="station-card__opening-periods">
        {openingPeriods.map((period) => (
          <p key={`${station.id}-${period.season}`}>
            {period.season === 'winter'
              ? 'Vintersäsong'
              : 'Sommarsäsong'}
            : {period.from}–{period.to}
          </p>
        ))}
      </div>
    </article>
  );
};

export default Station;
