import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './board.service';
import { Board } from './entities/board.entity';
@Resolver()
export class BoardsResolver {
    constructor(
        private readonly boardService: BoardsService, //
    ) {}

    @Query(() => [Board], { nullable: true })
    fetchBoards(): Board[] {
        return this.boardService.findAll();
    }
    @Mutation(() => String, { nullable: true })
    createBoard(
        @Args('writer') writer: string,
        @Args('title') title: string,
        @Args({ name: 'contents', nullable: true }) contents: string,
    ): string {
        return this.boardService.create(writer, title, contents);
    }
}
