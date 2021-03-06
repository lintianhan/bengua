import { get, post } from "@/api/ajax";

//获取程序配置
export function getConfig() {
    return get("static/config.json", null, { baseURL: "./" });
}

// 查找货物已占用位置
export function queryGoodsLabel(params) {
    return get("/goods/queryGoodsLabel", params);
}

// 更换货物已占用位置
export function switchLabel(params) {
    return post("/goods/switchLabel", params);
}
