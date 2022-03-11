import { gql } from "apollo-boost";

export default gql`
  query (
    $status: String
    $species: String
    $gender: String
    $type: String
    $page: Int
  ) {
    characters(
      page: $page
      filter: {
        status: $status
        gender: $gender
        species: $species
        type: $type
      }
    ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        type
        gender
        location {
          name
        }
        episode {
          name
        }
      }
    }
  }
`;
