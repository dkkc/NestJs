import { Controller, Get, Headers, Ip, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { sleep } from './asyncSleep';
import { UserData } from '../interface/user-data';

@Controller('fox')
export class FoxController {
  // @Get()
  // firstAction(
  //     @Headers('accept-language') acceptLanguage: string,
  //     @Query('name') name: string,
  //     @Query('lastName') lastName: string,
  //     @Req() request: Request,
  //
  //     // @Ip() ip: string
  // ) {
  //     // console.log( acceptLanguage);
  //     console.log(request);
  //     return `<h1>Hello ${name} ${lastName}</h1>`
  // }
  // @Get()
  // async firstAction() {
  //     // return `<!--<h1>Hello</h1>-->`
  //     // return [{
  //     //     name: 'Dariusz',
  //     //     lastName: 'Kowalec'
  //     // }]
  //     return await sleep();
  // }
  // @Get()
  // async firstAction(@Res() response: Response) {
  //     response.json('Response')
  // }
  @Get()
  firstAction(): UserData {
    return {
      name: 'Dariusz',
      lastName: 'Kowalec',
      age: 43,
    };
  }
}
