import { ColorSwatch, Group, Text } from '@mantine/core';

import React from 'react';
import { Option } from '@shared';

export type SelectControlItemProps = React.ComponentPropsWithoutRef<'div'> & Option;

export const SelectControlItem = React.forwardRef<HTMLDivElement, SelectControlItemProps>(
    ({ label, color, ...others }, ref) => {
        return (
            <div ref={ref} {...others}>
                <Group noWrap>
                    {
                        /*image ? (
                    <Avatar src={image} color={color}>
                        {getAvatarName(label)}
                    </Avatar>
                ) :*/ color ? <ColorSwatch size={15} color={color} /> : null
                    }

                    <div>
                        <Text size="sm">{label}</Text>
                        {/*<Text size="xs" opacity={0.65}>
                        {description}
                    </Text>*/}
                    </div>
                </Group>
            </div>
        );
    },
);
/*
const useStyles = createStyles((theme, {color}: {color?: string}) => ({
    avatar: {
        backgroundColor: color, // theme.fn.rgba(color ??  theme.colors.blue[6], 0.6),
        color: color ?? theme.colors.blue[6],
    }
}))

export const SelectControlPersonItem = React.forwardRef<
    HTMLDivElement,
    SelectControlItemProps
>(({ label, color, image, description, ...others }, ref) => {

    const {classes} = useStyles({color})

    return (
        <div ref={ref} {...others}>
            <Group noWrap>
                {(image || color) && (
                    <Avatar src={image} className={classes.avatar} >
                        {getAvatarName(label)}
                    </Avatar>
                )}

                <div>
                    <Text size="sm">{label}</Text>
                    <Text size="xs" opacity={0.65}>
                        {description}
                    </Text>
                </div>
            </Group>
        </div>
    );
});*/

/*                   <Avatar src={image} color={color}>
                        {getAvatarName(label)}
                    </Avatar>*/
