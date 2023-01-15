import axios from "axios";

const TOKEN = "cf1p6kiad3ie671j43qgcf1p6kiad3ie671j43r0"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
        token: TOKEN
    }
})