import { Injectable, Scope } from '@nestjs/common';

// 인젝션-스코프
// DEFAULT -> 싱글톤(new 한 번)으로 할 건지
// REQUEST -> req 마다 new 할 건지
// TRANSIENT -> 매 주입마다 new 할 건지
@Injectable({ scope: Scope.DEFAULT })
export class BoardsService {
    qqq(): string {
        return 'Hello World!';
    }
}
