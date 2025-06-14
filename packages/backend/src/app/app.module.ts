import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DBInitModule } from '@/libs/db-initializer/db_init.module';
import { CQRSModule } from '@/libs/cqrs';
import { ResourceManagementModule } from './resource-management';
import { Neo4jModule } from '@/libs/neo4j';
import { MonitoringModule } from './monitoring';
import { OrganizationModule } from './organization/organization.module';
import { ProjectManagementModule } from './project-management';
import { SchedulingModule } from './scheduling/scheduling.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        CQRSModule,
        Neo4jModule,
        MonitoringModule,
        DBInitModule,
        OrganizationModule,
        ResourceManagementModule,
        ProjectManagementModule,
        SchedulingModule,
    ],
    controllers: [],
})
export class AppModule {}
