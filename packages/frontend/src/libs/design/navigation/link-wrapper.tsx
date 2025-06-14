import { Children } from '../../types';
import { Link } from 'react-router-dom';

export interface LinkWrapperProps extends Children {
    to: string;
}

export function LinkWrapper({ children, to }: LinkWrapperProps) {
    return (
        <Link to={to} style={{ textDecoration: 'none' }}>
            {children}
        </Link>
    );
}
