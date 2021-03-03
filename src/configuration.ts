import { App, Configuration } from '@midwayjs/decorator';
import * as typegoose from '@midwayjs/typegoose';
import * as swagger from '@midwayjs/swagger';
import { ILifeCycle } from '@midwayjs/core';
import { Application } from 'egg';

@Configuration({
  imports: [
    swagger,
    typegoose
  ]
})
export class ContainerLifeCycle implements ILifeCycle {

  @App()
  app: Application;

  async onReady() {
  }
}
