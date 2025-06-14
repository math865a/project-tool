import { Provider } from '@nestjs/common';
import { NEO4J_TOKEN } from './neo4j-constants';
import neo4j from 'neo4j-driver';

export const Neo4jProvider: Provider = {
    provide: NEO4J_TOKEN,
    useFactory: () => {
        console.log(process.env.NEO4J_CONN);
        return neo4j.driver(
            process.env.NEO4J_CONN || 'bolt://neo4j:7687',
            neo4j.auth.basic('neo4j', 'password'),
            { disableLosslessIntegers: true },
        );
    },
};
