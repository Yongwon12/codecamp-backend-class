import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { switchMapTo } from 'rxjs';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get('/products/buy')
    getHello(): string {
        const qqq = 3;
        const profile = {
            age: 13,
            school: '다람쥐초등학교',
        };
        return this.appService.qqq();
    }
}
