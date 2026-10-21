export const SKELETON_COUNT = 6;

// placeholder card that mirrors Card's layout while the fetch is in flight
const SkeletonCard = () => (
  <div className="card skeleton-card" aria-hidden="true">
    <div className="image sk">
      <span className="sk sk-chip sk-chip-left" />
      <span className="sk sk-chip sk-chip-mid" />
      <span className="sk sk-chip sk-chip-right" />
    </div>
    <div className="info">
      <div className="row">
        <span className="sk sk-line" style={{ width: "65%" }} />
      </div>
      <div className="row">
        <span className="sk sk-line" style={{ width: "45%" }} />
        <span className="sk sk-line" style={{ width: "28%" }} />
      </div>
      <div className="row">
        <span className="sk sk-line" style={{ width: "18%" }} />
      </div>
    </div>
  </div>
);

export default SkeletonCard;
