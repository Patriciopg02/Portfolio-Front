import axios from "axios";

export default async function GetProjects() {
    const response = await axios.get(`${process.env.REACT_APP_MY_API_URL}/projects`);
    return response;
}