import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './board.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';
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
        // @Args('writer') writer: string,
        // @Args('title') title: string,
        // @Args({ name: 'contents', nullable: true }) contents: string,
        @Args('createBoardInput') createBoardInput: CreateBoardInput,
    ): string {
        return this.boardService.create({ createBoardInput });
    }
}
