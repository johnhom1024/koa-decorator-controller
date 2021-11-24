/*
 * @Date: 2021-11-22 21:33:28
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
 */
import Router from 'koa-router';
import '../controller/UserController'

import { controllerList } from '../decorator/Controller';
import { paramList } from '../decorator/Param';
import { routeList } from '../decorator/Http';
import { handlerFactory } from '../handler';

const router = new Router();

controllerList.forEach(controllerList => {
    const { path: basePath, target: cTarget } = controllerList;
    // 找到routeList中匹配的控制器实例
    routeList.filter(({ target }) => target === cTarget.prototype).forEach(route => {
        const { name: funcName, type, path, func } = route;
        // handler 即我们常见的（res, req, next) => {}
        const handler = handlerFactory(func, paramList.filter(param => param.name === funcName))
        
        router[type](path, handler);
    })
})

export default router;