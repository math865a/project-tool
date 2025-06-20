import { Global, Module } from '@nestjs/common';
import { Neo4jClient } from './neo4j.client';
import { Neo4jProvider } from './neo4j.provider';

@Global()
@Module({
    providers: [Neo4jProvider, Neo4jClient],
    exports: [Neo4jClient],
})
export class Neo4jModule {}
