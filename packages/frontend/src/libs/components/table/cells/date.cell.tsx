import { DatePicker } from '@mantine/dates';
import { useDisclosure, useHover } from '@mantine/hooks';
import { CellContext } from '@tanstack/react-table';
import { Dayjs } from 'dayjs';

import { useInputCell } from './use-input-cell';
import { ActionIcon, Box, createStyles, Popover, TextInput } from '@mantine/core';
import { IconCalendar } from '@tabler/icons-react';
import { useMemo } from 'react';
import { dt } from '../../../util';

const useStyles = createStyles((theme) => ({
    input: {
        textAlign: 'center',
    },
}));

export function DateCell(props: CellContext<any, Dayjs>) {
    const { inputProps, handleChange, handleSave, value } = useInputCell<Dayjs>(props);
    const { hovered, ref } = useHover();

    const { classes, cx } = useStyles();

    const [open, handlers] = useDisclosure(false);

    const textValue = useMemo(() => {
        return value?.format('DD-MM-YYYY') ?? ' - ';
    }, [value]);

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

    const onChange = (date: Dayjs) => {
        console.log('date', date);
        handleChange(date);
        handleSave(date);
    };

    return (
        <Box style={{ flex: 1 }} ref={ref}>
            <Popover withinPortal={true}>
                <TextInput
                    variant={'unstyled'}
                    rightSection={
                        <Popover.Target>
                            <ActionIcon>
                                {' '}
                                <IconCalendar size={16} />
                            </ActionIcon>
                        </Popover.Target>
                    }
                    value={textValue}
                    onChange={handleTextChange}
                />
                <Popover.Dropdown>
                    <DatePicker
                        date={value?.toDate()}
                        onChange={(v) => (v ? onChange(dt(v.toISOString())) : null)}
                    />
                </Popover.Dropdown>
            </Popover>
        </Box>
    );
}

/* <DateInput

                valueFormat="DD-MM-YYYY"
                allowDeselect
                dateParser={(v) => {
                    return dt(v, "DD-MM-YYYY").toDate();
                }}
                {...inputProps}
                classNames={{
                    ...inputProps.classNames,
                    input: cx(classes.input, inputProps.classNames?.input)
                }}
                value={value?.toDate()}
                placeholder={""}
                onChange={(v) =>
                    handleChange(
                        v === null ? undefined : dt(v)
                    )
                }
                size="sm"
            />*/