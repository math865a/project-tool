import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import {
    FinancialSourceOptionsQuery,
    FinancialSourceProfileQuery,
    FinancialSourcesViewQuery,
} from "./queries";
import {
    CreateFinancialSourceDto,
    FinancialSourceViewRow,
    Option,
    UpdateFinancialSourceDto,
} from "@shared";
import { HttpUser } from "@/libs/util";
import {
    CreateFinancialSourceCommand,
    DeleteFinancialSourceCommand,
    UpdateFinancialSourceCommand,
} from "./commands";

@Controller("financialsources")
export class FinancialSourcesController {
    constructor(
        private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ) {}

    @Get()
    async getFinancialSourcesView(): Promise<FinancialSourceViewRow[]> {
        return await this.queryBus.execute(new FinancialSourcesViewQuery());
    }

    @Get("options")
    async getFinancialSourceOptions(): Promise<Option[]> {
        return await this.queryBus.execute(new FinancialSourceOptionsQuery());
    }

    @Get(":financialSourceId")
    async getFinancialSourceProfile(
        @Param("financialSourceId") financialSourceId: string,
    ) {
        return await this.queryBus.execute(
            new FinancialSourceProfileQuery(financialSourceId),
        );
    }

    @Post()
    async createFinancialSource(
        @Body() dto: CreateFinancialSourceDto,
        @HttpUser() uid: string,
    ) {
        return await this.commandBus.execute(
            new CreateFinancialSourceCommand(dto, uid),
        );
    }

    @Post(":financialSourceId")
    async updateFinancialSource(
        @Param("financialSourceId") financialSourceId: string,
        @Body() dto: Omit<UpdateFinancialSourceDto, "financialsourceId">,
        @HttpUser() uid: string,
    ) {
        return await this.commandBus.execute(
            new UpdateFinancialSourceCommand(
                {
                    ...dto,
                    financialSourceId,
                },
                uid,
            ),
        );
    }

    @Delete(":financialSourceId")
    async deleteFinancialSource(
        @Param("financialSourceId") financialSourceId: string,
        @HttpUser() uid: string,
    ) {
        return await this.commandBus.execute(
            new DeleteFinancialSourceCommand(financialSourceId, uid),
        );
    }
}
