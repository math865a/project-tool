import { Module } from "@nestjs/common";
import { ServiceModule } from "@ns/service-deps";
import { ResourceModule } from "./resource/resource.module";
import { ResourcePortfolioModule } from "./resource-portfolio/resource-portfolio.module";
import { ResourceTypeModule } from "./resourcetype/resourcetype.module";
import { CalendarModule } from "./calendar/calendar.module";
import { CapacityBoardModule } from "./capacity-board/capacity-board.module";
import { ResourceScheduleModule } from "./resource-schedule/resource-schedule.module";
import { SchedulerModule } from "./scheduler/scheduler.module";

@Module({
    imports: [
        ServiceModule,
        ResourceModule,
        ResourcePortfolioModule,
        ResourceTypeModule,
        CalendarModule,
        CapacityBoardModule,
        ResourceScheduleModule,
        SchedulerModule,
    ],
})
export class ResourceManagementModule {}
