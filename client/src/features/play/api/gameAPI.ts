import axios from "axios"

import { Config } from "MyModels"

export function fetchConfig() {
    return axios.request<void, { data: Config }>({
        method: "GET",
        url: "/api/game"
    })
}
