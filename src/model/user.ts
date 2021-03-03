import { prop } from '@typegoose/typegoose';

class User {
  @prop()
  public name?: string;

  @prop({ type: () => [String] })
  public jobs?: string[];
}

export default User