import { useState } from "react";
import { useQuery } from "react-apollo";
import { useSearchParams } from "react-router-dom";
import CharacterTable from "../../components/CharacterTable";
import Filter from "../../components/Filter";
import Paginator from "../../components/Paginator";
import getCharacters from "../../fetch/getCharacters";
import "./style.scss";

const CharacterSearcher = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const initialFetchParams = {
    status: searchParams.get("status") || "",
    species: searchParams.get("species") || "",
    gender: searchParams.get("gender") || "",
    type: searchParams.get("type") || "",
    page: +searchParams.get("page") || 1,
  };

  const [fetchParams, setFetchParams] = useState({ ...initialFetchParams });

  const { data, loading, error } = useQuery(getCharacters, {
    variables: {
      ...fetchParams,
    },
  });

  const onQueryParamsChange = (params) => {
    setFetchParams(params);

    const pureParams = {};
    for (let key in params) {
      if (params[key]) pureParams[key] = params[key];
    }
    setSearchParams(pureParams);
  };

  const onFilterSubmit = (filterParams) => {
    onQueryParamsChange({ ...fetchParams, ...filterParams, page: 1 });
  };

  const onPageChange = (page) => {
    onQueryParamsChange({ ...fetchParams, page });
  };

  return (
    <div className="character-searcher">
      <Filter
        initialState={initialFetchParams}
        onFilterSubmit={onFilterSubmit}
      />
      {error && <p>{error.message}</p>}
      {data && !error && (
        <Paginator
          onChange={onPageChange}
          totalPages={data.characters.info.pages}
          page={
            data.characters.info.next
              ? data.characters.info.next - 1
              : data.characters.info.pages
          }
        />
      )}
      {loading && <p>Loading...</p>}
      {data && <CharacterTable data={data.characters.results} />}
    </div>
  );
};

export default CharacterSearcher;
