import type { ButtonHTMLAttributes, ElementType, ReactNode } from 'react'

import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

import { cn } from '@/utils/cn'

type Variant = 'blue' | 'green' | 'orange' | 'red';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    filled?: boolean;
    rightIcon?: ReactNode;
    to?: string;
    href?: string;
}

const variantStyles = {
    blue: {
        default: 'text-blue-500 hover:bg-blue-500 hover:text-blue-100 border-blue-500 active:bg-blue-700 active:border-blue-700 active:text-blue-200',
        filled: 'bg-blue-500 text-blue-100 hover:text-blue-500 hover:bg-blue-500/20 border-blue-500 active:bg-blue-500/10 active:border-blue-600 active:text-blue-600',
    },
    green: {
        default: 'text-green-500 hover:bg-green-500 hover:text-green-100 border-green-500 active:bg-green-700 active:border-green-700 active:text-green-200',
        filled: 'bg-green-500 text-green-100 hover:text-green-500 hover:bg-green-500/20 border-green-500 active:bg-green-500/10 active:border-green-600 active:text-green-600',
    },
    orange: {
        default: 'text-orange-500 hover:bg-orange-500 hover:text-orange-100 border-orange-500 active:bg-orange-700 active:border-orange-700 active:text-orange-200',
        filled: 'bg-orange-500 text-orange-100 hover:text-orange-500 hover:bg-orange-500/20 border-orange-500 active:bg-orange-500/10 active:border-orange-600 active:text-orange-600',
    },
    red: {
        default: 'text-red-500 hover:bg-red-500 hover:text-red-100 border-red-500 active:bg-red-700 active:border-red-700 active:text-red-200',
        filled: 'bg-red-500 text-red-100 hover:text-red-500 hover:bg-red-500/20 border-red-500 active:bg-red-500/10 active:border-red-600 active:text-red-600',
    },
};

export default function Button(props: ButtonProps) {
    let {
        variant = 'blue',
        filled = false,
        rightIcon,
        className,
        children,
        to,
        href,
    } = props;

    let Component: ElementType = 'button';
    let newProps: any = { ...props };

    if (href) {
        Component = 'a';
        Object.assign(newProps, {
            target: '_blank',
            href,
        });

        if (!rightIcon) {
            rightIcon = <ExternalLink size={18} />
        }
    } else if (to) {
        Component = Link;
        Object.assign(newProps, { to });
    }

    return (
        <Component
            className={cn(
                `inline-flex items-center justify-center gap-2 px-4 py-2 w-fit h-fit font-bold uppercase border-2`,
                filled
                    ? variantStyles[variant].filled
                    : variantStyles[variant].default,
                className
            )}
            {...newProps}
        >
            {children}
            {rightIcon && <span className='flex items-center'>{rightIcon}</span>}
        </Component>
    );
}