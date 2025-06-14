import { Module } from '@nestjs/common';
import { Neo4jModule } from '../neo4j';
import { DBInitService } from './db_init.service';

@Module({
    imports: [Neo4jModule],
    providers: [DBInitService],
})
export class DBInitModule {}
