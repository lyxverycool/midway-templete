import { Inject, Controller, Get, Post, Provide, Query } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/user';
import { ListService } from '../service/list';

@Provide()
@Controller('/api')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Inject()
  listService: ListService;

  @Get('/get_user')
  async setUser(@Query() uid) {
    const user = await this.userService.setUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @Get('/list')
  async getList(@Query() uid) {
    const data = await this.listService.queryListAll({ uid });
    this.ctx.send(data)
  }
}
