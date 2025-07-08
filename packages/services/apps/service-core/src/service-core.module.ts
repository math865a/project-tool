import { Module } from "@nestjs/common";
import { MonitoringModule } from "./monitoring";
import { OrganizationModule } from "./organization";
import { ProjectManagementModule } from "./project-management";
import { ResourceManagementModule } from "./resource-management";
import { SecurityModule } from "./security";
import { UserServiceModule } from "./user-service";

@Module({
    imports: [
        MonitoringModule,
        OrganizationModule,
        ProjectManagementModule,
        ResourceManagementModule,
        SecurityModule,
        UserServiceModule,
    ],
    controllers: [],
    providers: [],
})
export class ServiceCoreModule {}
