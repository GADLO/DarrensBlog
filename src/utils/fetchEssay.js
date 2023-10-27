import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',  //请求地址
    cache: new InMemoryCache(),
    headers: {
        Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    }
})


