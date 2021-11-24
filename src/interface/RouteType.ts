/*
 * @Date: 2021-11-22 20:40:38
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
 */

import { HttpMethod } from "src/types/HttpMethod";

export interface RouteType {
    type: HttpMethod, // 方法名
    target: object, // 类实例
    name: string | symbol, // 函数名
    path: string,
    func?: any,
}