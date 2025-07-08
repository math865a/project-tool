import { NestFactory } from "@nestjs/core";
import { ServiceCoreModule } from "./service-core.module";
import { Transport } from "@nestjs/microservices";

async function bootstrap() {
    const app = await NestFactory.createMicroservice(ServiceCoreModule, {
        transport: Transport.NATS,
        options: {
            servers: [process.env.NATS_CONN],
        },
    });
    await app.listen();
}
bootstrap();
