import { createClient } from "microcms-js-sdk"

export const client = createClient({
    serviceDomain: "blog-tutorial-bynextjs", 
    apiKey: process.env.API_KEY,
})