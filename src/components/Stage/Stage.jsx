import './Stage.scss';

const Stage = ({ stage }) => {
  return (
    <article className="stage">
      <header className="stage__header">
        <h2 className="stage__heading">
          {stage.from} → {stage.to}
        </h2>
      </header>

      <div className="stage__content">
        <div className="stage__row">
          <span className="stage__label">Distans</span>
          <span className="stage__value">{stage.distance} km</span>
        </div>

        <div className="stage__row">
          <span className="stage__label">Beräknad tid</span>
          <span className="stage__value">{stage.estimatedTime}</span>
        </div>

        <div className="stage__row">
          <span className="stage__label">Svårighetsgrad</span>
          <span className="stage__value">{stage.difficulty}</span>
        </div>

        <div className="stage__warning">
          <strong>Att tänka på</strong>
          <p>{stage.warning}</p>
        </div>
      </div>
    </article>
  );
};

export default Stage;