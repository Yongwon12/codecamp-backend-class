import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService], // new AppController(AppService)와 같은 의미
})
export class AppModule {}
