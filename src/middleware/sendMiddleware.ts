import { Provide } from '@midwayjs/decorator';
import { IWebMiddleware, IMidwayWebNext } from '@midwayjs/web';
import { Context } from 'egg';

const render = (ctx: Context) => {
  return (data: any, msg = '请求成功') => {
    ctx.set('Content-Type', 'application/json');
    ctx.body = {
      code: 0,
      data,
      msg
    }
  }
}

// 处理请求失败方法
const renderError = (ctx: Context) => {
  return (msg = '请求失败') => {
    ctx.set('Content-Type', 'application/json');
    ctx.body = {
      code: -1,
      data: null,
      msg
    }
  }
}

@Provide()
export class SendMiddleware implements IWebMiddleware {
  resolve() {
    return async (ctx: Context, next: IMidwayWebNext) => {
      ctx.send = render(ctx);
      ctx.sendError = renderError(ctx);
      await next();
    }
  }
}
