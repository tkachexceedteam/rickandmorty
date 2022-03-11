const CharacterTable = ({ data }) => {
  const columnNames = [
    "Name",
    "Status",
    "Species",
    "Gender",
    "Type",
    "Location",
    "Episode",
  ];

  const tableHeader = () => {
    return (
      <thead>
        <tr>
          {columnNames.map((columnName) => {
            return <th key={columnName}>{columnName}</th>;
          })}
        </tr>
      </thead>
    );
  };

  const tableBody = () => {
    return (
      <tbody>
        {data.map((row) => {
          const { id, name, status, species, gender, type, location, episode } =
            row;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{status}</td>
              <td>{species}</td>
              <td>{gender}</td>
              <td>{type}</td>
              <td>{location.name}</td>
              <td className={"episode"}>
                {episode.map((episode) => episode.name).join(", ") + "."}
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  };
  return (
    <table>
      {tableHeader()}
      {tableBody()}
    </table>
  );
};

export default CharacterTable;
