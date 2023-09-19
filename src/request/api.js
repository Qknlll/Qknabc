import http from "./http";

export const top = () => http.get('menu.json')

export const menu = () => http.get('roles.json')