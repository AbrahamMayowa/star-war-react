import { gql } from "@apollo/client";

export const SEARCH = gql`
query GetSearch($search: String!) {
    search(search: $search) {
      name
      height
      mass
      gender
      homeworld
    }
  }  
`;