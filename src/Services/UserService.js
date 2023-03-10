import axios from "axios";

export default class UserServices {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_LOGIN  ,
    });
  }

  async login(dados) {
    const { data } = await this.axios.post("/auth", dados);

    if (data) {
      localStorage.setItem("name", data.user.name);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("token", data.token.token);

      return true;
    }

    return;
  }

  async cadastrar(dados) {
    return this.axios.post("/users", dados);
  }

  usuarioAutenticado() {
    return localStorage.getItem("token") !== undefined ? true : false;
    // return typeof localStorage.getItem("token")
  }

  async logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
  }
}
