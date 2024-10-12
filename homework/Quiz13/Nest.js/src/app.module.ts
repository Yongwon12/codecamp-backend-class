import { Module } from '@nestjs/common';
import { BoardsModule } from './apis/boards/boards.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

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
            type: process.env.DATABASE_TYPE as 'mysql',
            host: process.env.DATABASE_HOST,
            port: Number(process.env.DATABASE_PORT),
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_DATABASE,
            entities: [],
            synchronize: true,
        }),
    ],
})
export class AppModule {}
