import gql from 'graphql-tag';

export const indexQuery = gql`query {
repository(owner: "GADLO", name: "markdown") {
    issues(last: 20, states: OPEN) {
        edges {
          node {
                title
                url
                body
                bodyHTML
                updatedAt
            }
        }
    }
}
}`