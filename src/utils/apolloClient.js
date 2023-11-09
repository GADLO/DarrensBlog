import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

function getHeaders() {
    const headers = {};

    headers['Authorization'] = `bearer ${import.meta.env.VITE_GRAPHQL_AUTH_TOKEN_A + import.meta.env.VITE_GRAPHQL_AUTH_TOKEN_B + import.meta.env.VITE_GRAPHQL_AUTH_TOKEN_C + import.meta.env.VITE_GRAPHQL_AUTH_TOKEN_D
        }`
    headers["Content-Type"] = "application/json";
    return headers;
}

//创建http link
const httpLink = new HttpLink({
    uri: `https://api.github.com/graphql`,
    fetch: (uri, options) => {
        options.headers = getHeaders();
        return fetch(uri, options);
    },

});

//创建apollo客户端
export const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
    defaultOptions: {
        query: {
            errorPolicy: "all",
        },
        mutate: {
            errorPolicy: "all",
        },
    },
});