import {
    useState,
    type ReactNode,
    type InputHTMLAttributes,
    type TextareaHTMLAttributes
} from 'react'
import { Eye, EyeOff } from 'lucide-react'

import { cn } from '@/utils/cn'

type Color = 'blue' | 'green' | 'orange' | 'red';

interface BaseTextInputProps {
    label?: string;
    color?: Color;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}

type TextInputAsBasicInput = BaseTextInputProps & InputHTMLAttributes<HTMLInputElement> & {
    as?: 'text' | 'password';
};

type TextInputAsTextArea = BaseTextInputProps & TextareaHTMLAttributes<HTMLTextAreaElement> & {
    as: 'textarea';
    leftIcon?: never
    rightIcon?: never
};

type TextInputProps = TextInputAsBasicInput | TextInputAsTextArea;

const colorStyles = {
    blue: [
        'bg-blue-500/20 border-blue-500 text-blue-100',
        'hover:border-blue-400',
        'active:border-blue-600 focus:border-blue-600',
        'placeholder:text-blue-100/60',
        'disabled:border-blue-500/50 disabled:bg-blue-500/10 disabled:text-blue-100/80'
    ],
    green: [
        'bg-green-500/20 border-green-500 text-green-100',
        'hover:border-green-400',
        'active:border-green-600 focus:border-green-600',
        'placeholder:text-green-100/60',
        'disabled:border-green-500/50 disabled:bg-green-500/10 disabled:text-green-100/80'
    ],
    orange: [
        'bg-orange-500/20 border-orange-500 text-orange-100',
        'hover:border-orange-400',
        'active:border-orange-600 focus:border-orange-600',
        'placeholder:text-orange-100/60',
        'disabled:border-orange-500/50 disabled:bg-orange-500/10 disabled:text-orange-100/80'
    ],
    red: [
        'bg-red-500/20 border-red-500 text-red-100',
        'hover:border-red-400',
        'active:border-red-600 focus:border-red-600',
        'placeholder:text-red-100/60',
        'disabled:border-red-500/50 disabled:bg-red-500/10 disabled:text-red-100/80'
    ]
};

export function TextInput(props: TextInputProps) {
    let {
        as = 'text',
        color = 'blue',
        label,
        className,
        disabled,
        rightIcon,
        leftIcon,
    } = props;

    const [showPassword, setShowPassword] = useState(false);

    if (as === 'password' && !rightIcon) {
        const togglePasswordVisibility = () => {
            if (!disabled) {
                setShowPassword((p) => !p);
            }
        }

        rightIcon = showPassword
            ? <EyeOff size={18} onClick={togglePasswordVisibility} />
            : <Eye size={18} onClick={togglePasswordVisibility} />
    }

    const iconColor = cn({
        'text-blue-100 group-has-disabled:text-blue-100/80': color === 'blue',
        'text-green-100 group-has-disabled:text-green-100/80': color === 'green',
        'text-orange-100 group-has-disabled:text-orange-100/80': color === 'orange',
        'text-red-100 group-has-disabled:text-red-100/80': color === 'red',
    });

    const baseStyle = 'w-64 px-3 py-2 border-2 outline-none select-none disabled:cursor-not-allowed min-h-11'

    return (
        <div className='flex flex-col gap-1'>
            <label className='group has-disabled:cursor-not-allowed select-none'>
                {label && <span className='font-medium'>{label}</span>}
                <div className='relative w-fit'>
                    {
                        as === 'textarea' ? (
                            <textarea
                                {...props as TextInputAsTextArea}
                                className={cn(
                                    baseStyle,
                                    colorStyles[color],
                                    className
                                )}
                            />
                        ) : (
                            <>
                                {leftIcon && (
                                    <span className={`absolute left-2 top-1/2 -translate-y-1/2 ${iconColor} group-has-disabled:cursor-not-allowed`}>
                                        {leftIcon}
                                    </span>
                                )}
                                <input
                                    {...props as TextInputAsBasicInput}
                                    type={showPassword ? 'text' : as}
                                    className={cn(
                                        baseStyle,
                                        {
                                            'pl-7': leftIcon,
                                            'pr-7': rightIcon
                                        },
                                        colorStyles[color],
                                        className
                                    )}
                                />
                                {rightIcon && (
                                    <span className={`absolute right-2 top-1/2 -translate-y-1/2 ${iconColor} group-has-disabled:cursor-not-allowed`}>
                                        {rightIcon}
                                    </span>
                                )}
                            </>
                        )
                    }
                </div>
            </label>
        </div>
    );
}