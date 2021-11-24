/*
 * @Date: 2021-11-22 23:09:02
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
 */
import { Controller } from "../decorator/Controller";
import { Get, Post } from "../decorator/Http";
import { Param, Query, Headers, Body } from "../decorator/Param";

@Controller('/')
class User {
    @Get('/:id') // 装饰 route
    index(@Param('id') id: number) {
        
        return '123';
    }

    @Post('/login')
    login(
        @Headers('authorization') auth: string,
        @Body() body: { name: string; password: string },
        @Body('name') name: string,
        @Body('password') psd: string,
    ) {
        console.log(body, auth);
        if (name !== 'lawler' || psd !== '111111') {
            return { code: 401, message: 'auth failed' }
        }
        return { code: 200, token: 't: 111111', message: 'success' }
    }
}

export default User;