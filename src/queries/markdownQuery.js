import gql from 'graphql-tag';

export const indexQuery = gql`query {
repository(owner: "GADLO", name: "markdown") {
    issues(last: 20, states: OPEN) {
        edges {
          node {
                id
                title
                url
                body
                bodyHTML
                updatedAt
                labels(first:5) {
                    edges {
                      node {
                        name
                      }
                    }
                }
            }
        }
    }
}
}`


