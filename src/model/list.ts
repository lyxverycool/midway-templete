import { prop } from '@typegoose/typegoose';

class List {
  @prop()
  public text?: string;

  @prop()
  public href?: string;
}

export default List