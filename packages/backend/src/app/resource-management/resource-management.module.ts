import { Module } from '@nestjs/common';
import { ResourcesModule } from './resources';
import { ResourceTypesModule } from './resourcetypes';
import { AgentsModule } from './agents';

@Module({
    imports: [ResourcesModule, ResourceTypesModule, AgentsModule],
})
export class ResourceManagementModule {}
