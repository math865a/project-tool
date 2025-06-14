import { ColorPicker, ColorSwatch, MantineNumberSize, Menu, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { defaultColors } from '../../util';

interface Props {
    value: string;
    onChange: (color: string) => void;
    size?: number;
    radius?: MantineNumberSize;
    disabled?: boolean;
    closeOnSelect?: boolean;
}

export function ColorControl({
    value,
    onChange,
    size = 20,
    radius,
    disabled,
    closeOnSelect = true,
}: Props) {
    const [opened, handlers] = useDisclosure();

    return (
        <Menu position="bottom-start" disabled={disabled} opened={opened}>
            <Menu.Target>
                <UnstyledButton
                    onClick={handlers.toggle}
                    style={{ cursor: disabled ? 'default' : 'pointer' }}
                >
                    <ColorSwatch color={value} size={size} radius={radius} />
                </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
                <ColorPicker
                    withPicker={false}
                    value={value}
                    swatches={defaultColors}
                    onChange={(color) => {
                        onChange(color);
                        if (closeOnSelect) {
                            handlers.close();
                        }
                    }}
                />
            </Menu.Dropdown>
        </Menu>
    );
}
