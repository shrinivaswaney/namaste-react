const SkeletonRestaurantCard = () => (
  <div className="res-card skeleton" aria-hidden="true">
    <div className="top shimmer-block" />
    <div className="bottom">
      <span
        className="sk-line shimmer-block"
        style={{ width: "75%", height: 18 }}
      />
      <span className="sk-line shimmer-block" style={{ width: "45%" }} />
      <span className="sk-line shimmer-block" style={{ width: "90%" }} />
      <div className="meta">
        <span className="sk-line shimmer-block" style={{ width: "40%" }} />
        <span className="sk-line shimmer-block" style={{ width: "22%" }} />
      </div>
    </div>
  </div>
);

const SkeletonCategoryCard = () => (
  <div className="category-skeleton" aria-hidden="true">
    <span className="sk-circle shimmer-block" />
    <span className="sk-line shimmer-block" style={{ width: "55%" }} />
  </div>
);

export { SkeletonCategoryCard, SkeletonRestaurantCard };
