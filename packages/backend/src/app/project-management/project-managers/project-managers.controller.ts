import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CreateProjectManagerDto, UpdateProjectManagerDto } from "@shared";
import { HttpUser } from "@/libs/util";
import { ProjectManagerService } from "./project-manager.service";

@Controller("project-managers")
export class ProjectManagersController {
    constructor(
        private readonly projectManagerService: ProjectManagerService,
    ) {}

    @Get()
    async getProjectManagers() {
        return await this.projectManagerService.getProjectManagers();
    }

    @Get("default")
    async getDefaultProjectManager() {
        return await this.projectManagerService.getDefaultProjectManager();
    }

    @Get("options")
    async getProjectManagerOptions() {
        return await this.projectManagerService.getProjectManagerOptions();
    }

    @Get(":projectManagerId")
    async getProjectManager(
        @Param("projectManagerId") projectManagerId: string,
    ) {
        return await this.projectManagerService.getProjectManager(
            projectManagerId,
        );

        /*return await Promise.all([
			this.client.request(
				projectManagerPatterns.getProjectManagerProfile,
				id
			),
			this.client.request(
				workpackagePatterns.getProjectManagerWorkpackages,
				id
			),
		]).then((res) => ({
			node: res[0],
			workpackages: res[1],
		}));*/
    }

    @Post()
    async createProjectManager(
        @Body() dto: CreateProjectManagerDto,
        @HttpUser() uid: string,
    ) {
        return await this.projectManagerService.createProjectManager(dto, uid);
    }

    @Post(":projectManagerId")
    async updateProjectManager(
        @Body() dto: Omit<UpdateProjectManagerDto, "id">,
        @Param("projectManagerId") projectManagerId: string,
        @HttpUser() uid: string,
    ) {
        return await this.projectManagerService.updateProjectManager(
            {
                ...dto,
                id: projectManagerId,
            },
            uid,
        );
    }

    @Delete(":id")
    async deleteProjectManager(
        @Param("id") id: string,
        @HttpUser() httpUser: string,
    ) {
        return await this.projectManagerService.deleteProjectManager(
            id,
            httpUser,
        );
    }
}
