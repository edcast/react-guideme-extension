import axios from "axios";
const url = "https://api-v3-stage.guideme.io/v3/";

const headers = {
    AccessToken: "",
    AppKey: "TESTAUTHKEY",
    "Content-Type": "application/json"
};

export const verifyEmail = (data, path) =>
    axios.post(url + path, data, { headers: headers });
export const userSignIn = (data, path) =>
    axios.post(url + path, data, { headers: headers });
