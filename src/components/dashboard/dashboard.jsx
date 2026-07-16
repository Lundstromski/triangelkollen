import './dashboard.scss';

function Dashboard() {
  return (
    <main className="dashboard">
      <section className="dashboard__top">
        <div className="dashboard__triangle">
          Triangle
        </div>

        <div className="dashboard__stations">
          Stations
        </div>
      </section>

      <section className="dashboard__summary">
        Summary
      </section>

      <section className="dashboard__stages">
        Stages
      </section>
    </main>
  );
}

export default Dashboard;