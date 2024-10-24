import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IAuthor } from './interfaces/author.interface';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectRepository(Author)
        private readonly authorRepository: Repository<Author>, //
    ) {}

    async create({ authors }: IAuthor) {
        return await this.authorRepository.insert(authors);
    }
}
