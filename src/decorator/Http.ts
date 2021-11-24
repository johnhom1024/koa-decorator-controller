/*
 * @Date: 2021-11-21 22:50:38
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 请求方法装饰器
 */

import { RouteType } from "../interface/RouteType";

import { HttpMethod } from "src/types/HttpMethod";

export const routeList: RouteType[] = [];

export function createMethodDecorator(method: HttpMethod = 'get') {
    return (path = '/'): MethodDecorator => 
    // target: 当前类的原型对象， name: 当前函数名， descriptor: 当前属性（函数）的描述符
    (target: object, name: string | symbol, descriptor: any) => {
        routeList.push({ type: method, target, name, path, func: descriptor.value });
    }
}

// 使用

export const Get = createMethodDecorator('get');
export const Post = createMethodDecorator('post');
