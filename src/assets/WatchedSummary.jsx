import average from "./average";
export default function WatchedSummary({ watched }) {
  const condition = watched.length > 0;
  const averageImdbRating = condition
    ? average(watched.map((movie) => movie.imdbRating))
    : 0;
  const averageUserRating = condition
    ? average(watched.map((movie) => movie.userRating))
    : 0;
  const averageRunTime = condition
    ? average(watched.map((movie) => movie.runtime))
    : 0;
  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{averageImdbRating.toFixed(2)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{averageUserRating.toFixed(2)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{averageRunTime} min</span>
        </p>
      </div>
    </div>
  );
}
