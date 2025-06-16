import {Await, useLoaderData, useNavigate, useSubmit} from 'react-router-dom';


import {Suspense} from 'react';
import {MultiSelectControl, PageModal, SelectControl} from '@libs/design';
import {useForm} from '@mantine/form';
import {CreateResourceTypeDto} from '@shared';
import {drawColor, getAvatarName, toFormData} from '@libs/util';
import {
    Button,
    ColorPicker,
    createStyles,
    Group,
    NumberInput,
    Paper,
    Popover,
    rem,
    Stack,
    Text,
    TextInput,
    Tooltip,
} from '@mantine/core';
import {AddResourceTypeData, addResourceTypeLoader} from "./loader.ts";

export function AddResourceTypePage() {
	const data = useLoaderData() as ReturnType<typeof addResourceTypeLoader>;

	return (
		<PageModal centered={false} withCloseButton={false} title={'Opret ressourcetype'}
				   size={'lg'}>
			<Suspense fallback={<div>Loading...</div>}>
				<Await resolve={data}>{(resolvedData) => <Component {...resolvedData} />}</Await>
			</Suspense>
		</PageModal>
	);
}

function Component(data: AddResourceTypeData) {
	const navigate = useNavigate();

	const submit = useSubmit();

	const getDefaultContract = () => {
		if (data.contracts.length === 0) {
			return '';
		}
		return data.contracts[0].value;
	}

	const form = useForm<CreateResourceTypeDto>({
		initialValues: {
			name: '',
			typeNo: 0,
			abbrevation: '',
			salesDefault: 0,
			salesOvertime: 0,
			resources: [],
			contract: getDefaultContract(),
			color: drawColor(),
		},
	});

	const handleSubmit = (values: CreateResourceTypeDto) => {
		submit(toFormData({data: JSON.stringify(values)}), {
			action: '/resourcetypes/add',
			method: 'POST',
		});
	};

	const {classes} = useStyles({
		color: form.values.color,
		size: 20,
		highlightOnHover: true,
	});

	const avatarName = getAvatarName(form.values.name);

	return (
		<form onSubmit={form.onSubmit(handleSubmit)} style={{width: '100%'}}>
			<Stack spacing={'lg'}>
				<TextInput
					{...form.getInputProps('name')}
					label={'Navn'}
					required
					autoFocus={true}
					rightSection={
						<Popover>
							<Popover.Target>
								<Tooltip label={'Choose color'} openDelay={1000}>
									<Paper className={classes.root}></Paper>
								</Tooltip>
							</Popover.Target>
							<Popover.Dropdown>
								<ColorPicker format={'hex'} {...form.getInputProps('color')} />
							</Popover.Dropdown>
						</Popover>
					}
				/>

				<TextInput
					{...form.getInputProps('abbrevation')}
					label={'Forkortelse'}
					required
					w={150}
				/>
				<Group grow={true}>
					<NumberInput
						{...form.getInputProps('salesDefault')}
						label={'Salgspris'}
						rightSection={
							<Text size={'xs'} pr={'lg'}>
								kr/t
							</Text>
						}
					/>
					<NumberInput
						{...form.getInputProps('salesOvertime')}
						label={'Salgspris overtid'}
						rightSection={
							<Text size={'xs'} pr={'lg'}>
								kr/t
							</Text>
						}
					/>
				</Group>
				<MultiSelectControl
					data={data.resources}
					label={'Ressourcer'}
					{...form.getInputProps('resources')}
				/>
				<SelectControl
					data={data.contracts}
					label={'Kontrakt'}
					{...form.getInputProps('contract')}
				/>
				<Group mt={'md'} position={'right'} w={'100%'}>
					<Button
						type={'button'}
						color={'red'}
						size={'sm'}
						onClick={() => navigate('/resources')}
					>
						Annullér
					</Button>
					<Button type={'submit'} variant={'filled'} size={'sm'}>
						Tilføj ressourcetype
					</Button>
				</Group>
			</Stack>
		</form>
	);
}

interface StylesParams {
	color: string;
	size: number;
	highlightOnHover: boolean;
}

const useStyles = createStyles((theme, {color, size, highlightOnHover}: StylesParams) => ({
	root: {
		borderRadius: theme.radius.md,
		backgroundColor: color,
		width: rem(size),
		height: rem(size),
		'&:hover': {
			backgroundColor: highlightOnHover ? theme.fn.rgba(color, 0.25) : undefined,
			cursor: highlightOnHover ? 'pointer' : undefined,
		},
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: color,
		fontWeight: 'bold',
		fontSize: rem(size / 2.5),
	},
}));
