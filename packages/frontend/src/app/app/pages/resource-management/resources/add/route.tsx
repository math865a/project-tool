import { Await, useLoaderData, useNavigate, useSubmit } from 'react-router-dom';

import { AddResourceData, addResourceLoader } from './loader.ts';
import { Suspense } from 'react';
import { MultiSelectControl, PageModal, SelectControl } from '@libs/design';
import { useForm } from '@mantine/form';
import { CreateResourceDto } from '@shared';
import { drawColor, getAvatarName, toFormData } from '@libs/util';
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

export function AddResourcePage() {
    const data = useLoaderData() as ReturnType<typeof addResourceLoader>;

    return (
        <PageModal centered={false} withCloseButton={false} title={'Opret ressource'} size={'lg'}>
            <Suspense fallback={<div>Loading...</div>}>
                <Await resolve={data}>{(resolvedData) => <Component {...resolvedData} />}</Await>
            </Suspense>
        </PageModal>
    );
}

function Component(data: AddResourceData) {
    const navigate = useNavigate();

    const submit = useSubmit();

    const form = useForm<CreateResourceDto>({
        initialValues: {
            name: '',
            initials: '',
            costDefault: 0,
            costOvertime: 0,
            resourceTypes: [],
            calendar: data.defaultCalendarId,
            color: drawColor(),
        },
    });

    const handleSubmit = (values: CreateResourceDto) => {
        submit(toFormData({ data: JSON.stringify(values) }), {
            action: '/resources/add',
            method: 'POST',
        });
    };

    const { classes } = useStyles({
        color: form.values.color,
        size: 20,
        highlightOnHover: true,
    });

    const avatarName = getAvatarName(form.values.name);

    return (
        <form onSubmit={form.onSubmit(handleSubmit)} style={{ width: '100%' }}>
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
                    {...form.getInputProps('initials')}
                    label={'Initialer'}
                    required
                    w={150}
                />
                <Group grow={true}>
                    <NumberInput
                        {...form.getInputProps('costDefault')}
                        label={'Kostpris'}
                        rightSection={
                            <Text size={'xs'} pr={'lg'}>
                                kr/t
                            </Text>
                        }
                    />
                    <NumberInput
                        {...form.getInputProps('costOvertime')}
                        label={'Kostpris overtid'}
                        rightSection={
                            <Text size={'xs'} pr={'lg'}>
                                kr/t
                            </Text>
                        }
                    />
                </Group>
                <MultiSelectControl
                    data={data.resourceTypes}
                    label={'Ressourcetyper'}
                    {...form.getInputProps('resourceTypes')}
                />
                <SelectControl
                    data={data.calendars}
                    label={'Kalender'}
                    {...form.getInputProps('calendar')}
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
                        Tilføj ressource
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

const useStyles = createStyles((theme, { color, size, highlightOnHover }: StylesParams) => ({
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
