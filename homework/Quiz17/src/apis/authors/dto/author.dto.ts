import { PickType } from '@nestjs/swagger';
import { Author } from '../entities/author.entity';

export class CreateAuthorInput extends PickType(Author, ['author']) {}
