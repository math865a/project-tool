import { ColorSwatch, Group, Text } from '@mantine/core';
import { Option } from '@shared';

export function EditorOption({
    leftSection,
    ...option
}: Option & { leftSection?: React.ReactNode }) {
    return (
        <Group align={'center'} spacing={'sm'}>
            {leftSection
                ? leftSection
                : option.color && <ColorSwatch key={'color'} color={option.color} size={13} />}
            <Text size={'sm'} color={'dark'} key={'text'}>
                {option.label}
            </Text>
        </Group>
    );
}
