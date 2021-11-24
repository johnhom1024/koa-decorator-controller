/*
 * @Date: 2021-11-22 20:45:15
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
 */
import { Params } from '../types/Params';
import { ParamType } from '../interface/ParamType';

export const paramList: ParamType[] = [];

export function createParamDecorator(type: Params ) {
    return (key?: string): ParameterDecorator =>
        (target: object, name: string | symbol, index: number) => {
            paramList.push({ key, index, type, name })
        }
}


// 使用

export const Query = createParamDecorator('query');
export const Param = createParamDecorator('param');
export const Body = createParamDecorator('body');
export const Headers = createParamDecorator('headers');