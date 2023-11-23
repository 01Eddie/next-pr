// import http from "./httpService";
// import { config } from "../config";

const apiEndpoint = `${config.apiUrl}/apidespacho/TAREM/Listar_Clientes`;

export function listarClientes() {
    // return http.get(`${apiEndpoint}/?Frecuencia=${frecuencia}`);
    return [1, 2, 333]
}
