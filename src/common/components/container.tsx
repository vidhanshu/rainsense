import { cn } from '@/lib/utils';
import React from 'react';

type TContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    as?: React.ElementType;
};
const Container = ({ as, children, className, ...rest }: TContainerProps) => {
    const Component = as || 'div';

    return (
        <Component
            className={cn('max-w-7xl mx-auto py-4', className)}
            {...rest}
        >
            {children}
        </Component>
    );
};

export default Container;
