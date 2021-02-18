import { SearchInput } from "../styles/SearchStyles";

type Props = { query: string; queryUpdate: any };
function Search({ query, queryUpdate }: Props) {
  return (
    <SearchInput
      type="search"
      name="query"
      value={query}
      onChange={queryUpdate}
      aria-label="Search for..."
      placeholder="Search for..."
    />
  );
}

export default Search;
