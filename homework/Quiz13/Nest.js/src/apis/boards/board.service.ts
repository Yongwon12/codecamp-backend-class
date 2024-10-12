import { Injectable, Scope } from '@nestjs/common';
import { CreateStarbucksInput } from './dto/create-starbucks.input';
import { starbucksMenu } from './starbucks';
import { Starbucks } from './entities/starbucks.entity';

// 인젝션-스코프
// DEFAULT -> 싱글톤(new 한 번)으로 할 건지
// REQUEST -> req 마다 new 할 건지
// TRANSIENT -> 매 주입마다 new 할 건지
@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
    getStarbucks(): Starbucks[] {
        const result = starbucksMenu();
        return result;
    }

    putStarbucks(createStarbucksInput: CreateStarbucksInput): string {
        console.log(createStarbucksInput);
        return '등록에 성공하였습니다.';
    }
}
