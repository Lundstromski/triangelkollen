import './Triangle.scss';

const Triangle = ({ trail }) => {
  return (
    <section className="triangle">
      <header className="triangle__header">
        <h1 className="triangle__heading">
          {trail.name}
        </h1>

        <p className="triangle__description">
          {trail.description}
        </p>
      </header>

      <div className="triangle__map">
      </div>

      <footer className="triangle__footer">
        <div className="triangle__summary">
          <span className="triangle__label">
            Besökstryck denna vecka
          </span>

          <strong className="triangle__value">
            Hög
          </strong>
        </div>

        <div className="triangle__summary">
          <span className="triangle__label">
            Totalt
          </span>

          <strong className="triangle__value">
            {trail.length} km
          </strong>
        </div>
      </footer>
    </section>
  );
};

export default Triangle;