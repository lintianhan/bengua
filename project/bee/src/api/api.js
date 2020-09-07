import instance from '../api/axios'
import url from 'postcss-url'
export function login(obj) {
    return instance.post(`sys/user/login`, obj)
}
export function getMenu() {
    return instance.get(`sys/getMenuForView`)
}
export function addVehicleModel(obj) {
    return instance.post(`sys/addVehicleModel`, obj)
}
export function getVehicleModelInfoPage(obj) {
    return instance.post(`sys/getVehicleModelInfoPage`,obj)
}
export function deleteVehicleModel(obj) {
    const urlid='sys/deleteVehicleModel?id='+obj;
    return instance.get(urlid);
}
export function modifyVehicleModelInfo(obj) {
    return instance.post(`sys/modifyVehicleModelInfo`, obj)
}
export function getNewsMsgListForPage(obj) {
    return instance.post(`sys/getNewsMsgListForPage`,obj)
}
export function recommendNews(obj) {
    return instance.post(`sys/recommendNews`,obj)
}
export function deleteNewsMsg(obj) {
    const urlid='sys/deleteNewsMsg?newsId='+obj;
    return instance.get(urlid);
}
export function addNewsMsg(obj) {
    return instance.post(`sys/addNewsMsg`, obj)
}
export function getNewsMsgDetail(obj) {
    const urlid='sys/getNewsMsgDetail?newsId='+obj;
    return instance.get(urlid);
}
export function modifyNewsMsg(obj) {
    return instance.post(`sys/modifyNewsMsg`,obj)
}
export function pushMsgNow(obj) {
    const urlid='sys/pushMsgNow?newsId='+obj;
    return instance.get(urlid)
}
export function getCodeInfoList(obj) {
    return instance.post(`sys/getCodeInfoList`, obj)
}
export function getCountryConfigList(obj) {
    return instance.post(`sys/getCountryConfigList`, obj)
}
export function getAdInfoList(obj) {
    return instance.post(`sys/getAdInfoList`, obj)
}
export function changeAdStatus(obj) {
    return instance.post(`sys/changeAdStatus`,obj)
}
export function addAdInfo(obj) {
    return instance.post(`sys/addAdInfo`,obj)
}

export function updateAdInfo(obj) {
    return instance.post(`sys/updateAdInfo`,obj)
}
export function deleteAdInfo(obj) {
    const urlid='sys/deleteAdInfo?id='+obj;
    return instance.get(urlid);
}