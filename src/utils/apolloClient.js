import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

function getHeaders() {
    const headers = {};

    headers['Authorization'] = `bearer ${window.atob(import.meta.env.VITE_GRAPHQL_AUTH_TOKEN)}`
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