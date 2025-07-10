
function SearchInput({ value, onChange }) {

    return (
        <input
          className="form-control mb-3 fs-5 border border-2"
          type="text"
          placeholder="Buscá una ciudad..."
          value={value}
          onChange={onChange}
        />
    )

}


export default SearchInput