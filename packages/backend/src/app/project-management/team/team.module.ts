import { Module } from '@nestjs/common';
import { commandHandlers } from './commands';
import { queryHandlers } from './queries';
import { TeamService } from './team.service';

@Module({
    providers: [...commandHandlers, ...queryHandlers, TeamService],
    exports: [TeamService],
})
export class TeamModule {}
