/*
 * @Date: 2021-11-21 22:43:50
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 控制器装饰器
 */
import { ControllerType } from "../interface/ControllerType";

export const controllerList: ControllerType[] = [];

export function Controller(path = ''): ClassDecorator {
    // target: controller 类，不是实例
    return (target: object) => {
        controllerList.push({ path, target })
    }
}

