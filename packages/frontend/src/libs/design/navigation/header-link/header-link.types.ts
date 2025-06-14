import React from 'react';
import { TablerIconsProps } from '@tabler/icons-react';

export interface LinkBaseProps {
    url: string;
    end?: boolean;
    label: string;
}

export interface HeaderLinkProps extends LinkBaseProps {
    icon?: React.FC<TablerIconsProps>;
    subLinks?: SubLink[];
}

export interface SubLink extends LinkBaseProps {
    id: string;
    icon?: React.FC<TablerIconsProps>;
    title?: string;
}

export interface RecentRecord extends LinkBaseProps {
    id: string;
}

export interface HeaderLinkMenuProps extends Omit<HeaderLinkProps, 'subLinks'> {
    subLinks: SubLink[];
}
