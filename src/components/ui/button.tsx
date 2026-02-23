import type {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    ElementType,
    ReactNode
} from 'react'

import { ExternalLink } from 'lucide-react'
import { Link, type LinkProps } from 'react-router-dom'

import { cn } from '@/utils/cn'

type Variant = 'blue' | 'green' | 'orange' | 'red' | 'purple' | 'gray';

interface BaseButtonProps {
    variant?: Variant;
    filled?: boolean;
    rightIcon?: ReactNode;
}

type ButtonAsButton = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: 'button';
    href?: never
    to?: never
};

type ButtonAsAnchor = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: 'a';
    href: string;
    to?: never;
};

type ButtonAsLink = BaseButtonProps & LinkProps & {
    as: 'link';
    to: string;
    href?: never;
};

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

const variantStyles = {
    blue: {
        default: [
            'text-blue-500 border-blue-500',
            'not-disabled:hover:bg-blue-500 not-disabled:hover:text-blue-100',
            'not-disabled:active:bg-blue-700 not-disabled:active:border-blue-700 not-disabled:active:text-blue-200',
            'disabled:border-blue-500/50 disabled:text-blue-500/70'
        ],
        filled: [
            'bg-blue-500 text-blue-100 border-blue-500',
            'not-disabled:hover:text-blue-500 not-disabled:hover:bg-blue-500/20',
            'not-disabled:active:bg-blue-500/10 active:border-blue-600 not-disabled:active:text-blue-600',
            'disabled:bg-blue-500/50 disabled:border-transparent disabled:text-blue-100/80'
        ],
    },
    green: {
        default: [
            'text-green-500 border-green-500',
            'not-disabled:hover:bg-green-500 not-disabled:hover:text-green-100',
            'not-disabled:active:bg-green-700 not-disabled:active:border-green-700 not-disabled:active:text-green-200',
            'disabled:border-green-500/50 disabled:text-green-500/70'
        ],
        filled: [
            'bg-green-500 text-green-100 border-green-500',
            'not-disabled:hover:text-green-500 not-disabled:hover:bg-green-500/20',
            'not-disabled:active:bg-green-500/10 not-disabled:active:border-green-600 not-disabled:active:text-green-600',
            'disabled:bg-green-500/50 disabled:border-transparent disabled:text-green-100/80'
        ],
    },
    orange: {
        default: [
            'text-orange-500 border-orange-500',
            'not-disabled:hover:bg-orange-500 not-disabled:hover:text-orange-100 ',
            'not-disabled:active:bg-orange-700 not-disabled:active:border-orange-700 not-disabled:active:text-orange-200',
            'disabled:border-orange-500/50 disabled:text-orange-500/70'
        ],
        filled: [
            'bg-orange-500 text-orange-100 border-orange-500',
            'not-disabled:hover:text-orange-500 not-disabled:hover:bg-orange-500/20',
            'not-disabled:active:bg-orange-500/10 not-disabled:active:border-orange-600 not-disabled:active:text-orange-600',
            'disabled:bg-orange-500/50 disabled:border-transparent disabled:text-orange-100/80'
        ],
    },
    red: {
        default: [
            'text-red-500 border-red-500',
            'not-disabled:hover:bg-red-500 not-disabled:hover:text-red-100',
            'not-disabled:active:bg-red-700 not-disabled:active:border-red-700 not-disabled:active:text-red-200',
            'disabled:border-red-500/50 disabled:text-red-500/70'
        ],
        filled: [
            'bg-red-500 text-red-100 border-red-500',
            'not-disabled:hover:text-red-500 not-disabled:hover:bg-red-500/20',
            'not-disabled:active:bg-red-500/10 not-disabled:active:border-red-600 not-disabled:active:text-red-600',
            'disabled:bg-red-500/50 disabled:border-transparent disabled:text-red-100/80'
        ],
    },
    purple: {
        default: [
            'text-purple-500 border-purple-500',
            'not-disabled:hover:bg-purple-500 not-disabled:hover:text-purple-100',
            'not-disabled:active:bg-purple-700 not-disabled:active:border-purple-700 not-disabled:active:text-purple-200',
            'disabled:border-purple-500/50 disabled:text-purple-500/70'
        ],
        filled: [
            'bg-purple-500 text-purple-100 border-purple-500',
            'not-disabled:hover:text-purple-500 not-disabled:hover:bg-purple-500/20',
            'not-disabled:active:bg-purple-500/10 not-disabled:active:border-purple-600 not-disabled:active:text-purple-600',
            'disabled:bg-purple-500/50 disabled:border-transparent disabled:text-purple-100/80'
        ],
    },
    gray: {
        default: [
            'text-gray-500 border-gray-500',
            'not-disabled:hover:bg-gray-500 not-disabled:hover:text-gray-100',
            'not-disabled:active:bg-gray-700 not-disabled:active:border-gray-700 not-disabled:active:text-gray-200',
            'disabled:border-gray-500/50 disabled:text-gray-500/70'
        ],
        filled: [
            'bg-gray-500 text-gray-100 border-gray-500',
            'not-disabled:hover:text-gray-500 not-disabled:hover:bg-gray-500/20',
            'not-disabled:active:bg-gray-500/10 not-disabled:active:border-gray-600 not-disabled:active:text-gray-600',
            'disabled:bg-gray-500/50 disabled:border-transparent disabled:text-gray-100/80'
        ],
    },
};

export default function Button(props: ButtonProps) {
    let {
        variant = 'blue',
        filled = false,
        rightIcon,
        className,
        children,
        as,
        ...rest
    } = props;

    let Component: ElementType = 'button';
    let newProps: any = { ...rest };

    if (as === 'a') {
        Component = 'a';

        if (!rightIcon) {
            rightIcon = <ExternalLink size={18} />
        }
    } else if (as === 'link') {
        Component = Link;
    }

    return (
        <Component
            className={cn(
                `inline-flex items-center justify-center gap-2 px-4 py-2 w-fit h-fit font-bold uppercase border-2 select-none`,
                'disabled:cursor-not-allowed',
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