import instance from '../api/axios'
export function login(obj) {
    return instance.post(`sys/user/login`, obj)
}
export function getMenu() {
    return instance.get(`sys/getMenuForView`)
}