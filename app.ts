/*
 * @Date: 2021-11-22 20:38:16
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
 */

import 'reflect-metadata'
import router from './src/register/index';
import logger from 'koa-logger';


import Koa from 'koa';

const app = new Koa();
const config = {
    port: 3000,
}

app.use(logger())
app.use(router.routes());


app.listen(config.port, () => {
    console.log(
        `✅  The server is running at http://localhost:${config.port}/`
    );
});
