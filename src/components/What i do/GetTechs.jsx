import axios from "axios";

export default async function GetTechs() {
    const response = await axios.get(`${process.env.REACT_APP_MY_API_URL}/techs`);
    return response;
}