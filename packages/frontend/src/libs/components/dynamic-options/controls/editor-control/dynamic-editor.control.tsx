import { Button, createStyles, Loader, Popover, rem, Stack, Text } from '@mantine/core';
import { DynamicEditorProps } from '../../types.ts';
import { EditorOption } from './option.item.tsx';
import { DynamicProvider, useDynamicOptions } from '../../state';
import { EditorItem } from './editor.item.tsx';
import { useDisclosure } from '@mantine/hooks';
import { Option } from '@shared';

export function DynamicEditorControl<T extends Option = Option>({
    url,
    initialOptions,
    ...props
}: DynamicEditorProps<T>) {
    return (
        <DynamicProvider url={url} initialOptions={initialOptions}>
            <Component {...props} />
        </DynamicProvider>
    );
}

function Component<T extends Option = Option>({
    value,
    onChange,
    getSecondaryAction,
    closeOnSelect = true,
    title,
    getLeftSection,
    noValueLabel = '',
    itemSpacing = 4,
    customPreview,
    ...props
}: Omit<DynamicEditorProps<T>, 'url' | 'initialOptions'>) {
    const { options, isLoading } = useDynamicOptions<T>();

    const [opened, handlers] = useDisclosure();

    const handleChange = (option: T) => {
        onChange(option);
        if (closeOnSelect) {
            handlers.close();
        }
    };

    const { classes } = useStyles();

    return (
        <Popover opened={opened} onClose={handlers.close} classNames={classes}>
            <Popover.Target key={'target'}>
                <Button
                    size={'xs'}
                    variant={'subtle'}
                    color={'gray'}
                    px={'sm'}
                    style={{ fontWeight: 400 }}
                    {...props}
                    onClick={handlers.toggle}
                >
                    {customPreview ? (
                        <></>
                    ) : value ? (
                        <EditorOption
                            {...value}
                            leftSection={
                                getLeftSection ? getLeftSection(value, 'value') : undefined
                            }
                        />
                    ) : (
                        <Text size={'sm'} color={'dimmed'}>
                            {noValueLabel}
                        </Text>
                    )}
                </Button>
            </Popover.Target>
            <Popover.Dropdown key={'drop-down'}>
                {isLoading ? (
                    <Loader />
                ) : (
                    <Stack spacing={itemSpacing}>
                        {title ? (
                            <Text key={'title'} pl={4} mb={4} size={'sm'} color={'dimmed'} fw={700}>
                                {title}
                            </Text>
                        ) : null}
                        {options.map((option) => (
                            <EditorItem
                                key={option.value}
                                option={option}
                                isSelected={value?.value === option.value}
                                handleClick={handleChange}
                                secondaryAction={
                                    getSecondaryAction ? getSecondaryAction(option) : undefined
                                }
                                leftSection={
                                    getLeftSection ? getLeftSection(option, 'option') : undefined
                                }
                            />
                        ))}
                    </Stack>
                )}
            </Popover.Dropdown>
        </Popover>
    );
}

const useStyles = createStyles((theme) => ({
    dropdown: {
        minWidth: rem(225),
        padding: '12px 8px',
    },
}));
