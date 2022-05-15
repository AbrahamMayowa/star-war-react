import { gql } from "@apollo/client";

export const GET_PEOPLES = gql`
  query GetPeople($offset: Int) {
    people(offset: $offset) {
      peoples {
        name
        height
        mass
        gender
        homeworld
      }
      count
      next
      prev
    }
  }
`;