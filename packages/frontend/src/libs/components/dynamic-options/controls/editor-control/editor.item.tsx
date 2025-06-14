import { createStyles, Flex, UnstyledButton } from '@mantine/core';
import { EditorOption } from './option.item.tsx';
import { DynamicEditorItemProps } from '../../types.ts';
import { Option } from '@shared';

export function EditorItem<T extends Option = Option>({
    option,
    isSelected,
    handleClick,
    secondaryAction,
    leftSection,
}: DynamicEditorItemProps<T>) {
    const { classes } = useStyles({ isSelected });
    return (
        <Flex style={{ flexGrow: 1 }} justify={'space-between'} align={'center'}>
            <UnstyledButton
                style={{ flexGrow: 1 }}
                onClick={() => handleClick(option)}
                className={classes.button}
            >
                <EditorOption {...option} leftSection={leftSection} />
            </UnstyledButton>
            {secondaryAction}
        </Flex>
    );
}

const useStyles = createStyles((theme, { isSelected }: { isSelected: boolean }) => ({
    button: {
        borderRadius: theme.radius.sm,
        padding: '0.4rem 0.75rem',
        transition: 'background .15s ease',
        background: isSelected ? theme.colors.blue[0] : undefined,
        '&:hover': {
            backgroundColor: '#f1f3f5',
        },
    },
}));
