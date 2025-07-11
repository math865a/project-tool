import { NestFactory } from "@nestjs/core";
import { ServiceCoreModule } from "./service-core.module";
import { Transport } from "@nestjs/microservices";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.createMicroservice(ServiceCoreModule, {
        transport: Transport.NATS,
        options: {
            servers: [process.env.NATS_CONN],
        },
    });
    app.useGlobalPipes(new ValidationPipe());
    await app.listen();
}
bootstrap();
