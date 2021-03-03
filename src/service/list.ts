import { Provide } from '@midwayjs/decorator';
import { getModelForClass } from '@typegoose/typegoose';
import List from '../model/list';

@Provide()
export class ListService {
  async queryListAll(options: any) {
    const ListModal = getModelForClass(List);
    const data = await ListModal.find({})
    return data;
  }
}
