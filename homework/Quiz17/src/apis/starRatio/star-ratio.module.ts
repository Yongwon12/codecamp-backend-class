import { Module } from '@nestjs/common';
import { StarRatio } from './entities/star-ratio.entity';
import { StarRatioController } from './star-ratio.controller';
import { StarRatioService } from './star-ratio.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([StarRatio])],
    controllers: [StarRatioController],
    providers: [StarRatioService],
})
export class StarRatioModule {}
