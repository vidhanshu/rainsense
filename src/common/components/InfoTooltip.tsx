import React, { PropsWithChildren } from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

const InfoTooltip = ({
    trigger,
    children,
}: {
    trigger: React.ReactNode;
} & PropsWithChildren) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={0}>
                <TooltipTrigger>{trigger}</TooltipTrigger>
                <TooltipContent align='start'>
                    <p>{children}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default InfoTooltip;
