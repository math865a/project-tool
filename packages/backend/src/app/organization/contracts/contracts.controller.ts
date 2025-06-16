import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {CommandBus, QueryBus} from '@nestjs/cqrs';
import {ContractOptionsQuery, ContractProfileQuery, ContractsViewQuery} from './queries';
import {ContractViewRow, CreateContractDto, Option, UpdateContractDto} from '@shared';
import {HttpUser} from '@/libs/util';
import {CreateContractCommand, UpdateContractCommand} from './commands';

@Controller('contracts')
export class ContractsController {
	constructor(
		private readonly commandBus: CommandBus,
		private readonly queryBus: QueryBus,
	) {
	}

	@Get('options')
	async getContractOptions(): Promise<Option[]> {
		return await this.queryBus.execute(new ContractOptionsQuery());
	}

	@Get()
	async getContractsView(): Promise<ContractViewRow[]> {
		return await this.queryBus.execute(new ContractsViewQuery());
	}

	@Get(':contractId')
	async getContractProfile(@Param('contractId') contractId: string) {
		return await this.queryBus.execute(new ContractProfileQuery(contractId));
	}

	@Post()
	async createContract(@Body() dto: CreateContractDto, @HttpUser() uid: string) {
		return await this.commandBus.execute(new CreateContractCommand(dto, uid));
	}

	@Post(':id')
	async updateContract(
		@Param('id') id: string,
		@Body() dto: Omit<UpdateContractDto, 'contractId'>,
		@HttpUser() uid: string,
	) {
		return await this.commandBus.execute(
			new UpdateContractCommand({...dto, contractId: id}, uid),
		);
	}
}
