import { Provider } from "@nestjs/common";
import { NEO4J_TOKEN } from "./neo4j-constants";
import neo4j from "neo4j-driver";

export const Neo4jProvider: Provider = {
    provide: NEO4J_TOKEN,
    useFactory: () => {
        const neo4jUser = process.env.NEO4J_USER;
        const neo4jPassword = process.env.NEO4J_PASSWORD;
        const neo4jConn = process.env.NEO4J_CONN;

        if (!neo4jUser || !neo4jPassword) {
            throw new Error(
                "NEO4J_USER and NEO4J_PASSWORD environment variables must be set"
            );
        }

        if (!neo4jConn) {
            throw new Error("NEO4J_CONN environment variable must be set");
        }

        return neo4j.driver(
            neo4jConn,
            neo4j.auth.basic(neo4jUser, neo4jPassword),
            { disableLosslessIntegers: true }
        );
    },
};
