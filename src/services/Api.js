import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: `https://polls.apiblueprint.org`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
