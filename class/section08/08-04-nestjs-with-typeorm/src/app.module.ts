import { Module } from '@nestjs/common';
import { BoardsModule } from './apis/boards/boards.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Board } from './apis/boards/entities/board.entity';

@Module({
    imports: [
        BoardsModule, //
        // ProductsModule,
        // UsersModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/commons/graphql/schema.gql',
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'D08yw14k.',
            database: 'myproject',
            entities: [Board],
            logging: true,
            synchronize: true,
        }),
    ],
})
export class AppModule {}
