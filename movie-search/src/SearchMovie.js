import "./App.css";
import "./index.css";
function SearchMovie() {
  return (
    <form className="form">
      <label className="label" for="query">
        Search Movie
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e Interstellar"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchMovie;
