import { Provide } from '@midwayjs/decorator';
import { IUserOptions } from '../interface';
import { getModelForClass } from '@typegoose/typegoose';
import User from '../model/user';

@Provide()
export class UserService {
  async setUser(options: IUserOptions) {
    const UserModel = getModelForClass(User);
    await UserModel.create({ name: 'JohnDoe', jobs: ['Cleaner'] } as User)
    return true;
  }
}
