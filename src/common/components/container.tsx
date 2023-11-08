import React from 'react';

type TContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    as?: React.ElementType;
};
const Container = ({ as, children, className, ...rest }: TContainerProps) => {
    const Component = as || 'div';

    return (
        <Component className="max-w-7xl mx-auto py-4" {...rest}>
            {children}
        </Component>
    );
};

export default Container;
