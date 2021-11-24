/*
 * @Date: 2021-11-21 23:11:36
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
 */

import { NextFunction } from "connect";
import { ParseType } from "../interface/ParseType";
import { ParamType } from '../interface/ParamType';
import { Context, Request, Response, } from "koa";


export function handlerFactory(func: (...args: any[]) => any, paramList: ParamType[]) {
    return async (ctx: Context, next: NextFunction) => {
        try {
            // 获取路由函数的参数
            const args = extractParameters(ctx.request, ctx.response, next, paramList);
            const result = await func(...args);
            ctx.body = result
        } catch (error) {
            next(error);
        }
    }
}

export function extractParameters(
    req: Request,
    res: Response,
    next: NextFunction,
    paramArr: ParamType[] = [],
    parseArr: ParseType[] = [],
) {
    if (!paramArr.length) return [req, res, next];

    const args: any = [];
    // 进行第三层遍历
    paramArr.forEach(param => {
        const { key, index, type } = param;
        // 获取相应的值，如 @Query('id') 则为 req.query.id
        switch (type) {
            case 'query':
                args[index] = key ? req.query[key] : req.query;
                break;
            case 'body':
                args[index] = key ? req.body[key] : req.body;
                break;
            case 'headers':
                args[index] = key ? req.headers[key.toLowerCase()] : req.headers;
                break;
            // ...
        }
    });

    // 小优化，处理参数类型
    parseArr.forEach(parse => {
        const { type, index } = parse;
        switch (type) {
            case 'number':
                args[index] = +args[index];
                break;
            case 'string':
                args[index] = args[index] + '';
                break;
            case 'boolean':
                args[index] = Boolean(args[index]);
                break;
        }
    });

    args.push(req, res, next);
    return args;
}
