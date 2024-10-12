import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BoardsService } from './board.service';
import { CreateStarbucksInput } from './dto/create-starbucks.input';
import { Starbucks } from './entities/starbucks.entity';
@Resolver()
export class BoardsResolver {
    constructor(
        private readonly boardService: BoardsService, //
    ) {}

    @Query(() => [Starbucks], { nullable: true })
    fetchStarbucks(): Starbucks[] {
        console.log(this.boardService.getStarbucks());
        return this.boardService.getStarbucks();
    }
    @Mutation(() => String, { nullable: true })
    createStarbucks(
        @Args('createStarbucksInput')
        createStarbucksInput: CreateStarbucksInput,
    ): string {
        return this.boardService.putStarbucks(createStarbucksInput);
    }
}
