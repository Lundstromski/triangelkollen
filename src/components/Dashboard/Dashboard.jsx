import trail from '../../data/trail.json';

import Triangle from '../Triangle/Triangle';
import Station from '../Station/Station';
import Stage from '../Stage/Stage';

import './Dashboard.scss';

const Dashboard = () => {
  const { stations, stages, trail: trailInfo } = trail;

  return (
    <main className="dashboard">
      <section className="dashboard__top">
        <div className="dashboard__triangle">
          <Triangle
            trail={trailInfo}
            stations={stations}
          />
        </div>

        <div className="dashboard__stations">
          {stations.map((station) => (
            <Station
              key={station.id}
              station={station}
            />
          ))}
        </div>
      </section>

      <section className="dashboard__stages">
        {stages.map((stage) => (
          <Stage
            key={stage.id}
            stage={stage}
          />
        ))}
      </section>
    </main>
  );
};

export default Dashboard;