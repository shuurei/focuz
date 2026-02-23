import type { InputHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type Variant = 'blue' | 'green' | 'orange' | 'red' | 'purple'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    variant?: Variant
    label?: string
}

const variantStyles = {
    blue: [
        'bg-blue-400/20 border-blue-400',
        'checked:bg-blue-400',
        'group-has-hover:border-blue-300',
        'group-has-disabled:bg-blue-400/05 group-has-disabled:border-blue-400/50'
    ],
    green: [
        'bg-green-400/20 border-green-400',
        'checked:bg-green-400',
        'group-has-hover:border-green-300',
        'group-has-disabled:bg-green-400/05 group-has-disabled:border-green-400/50'
    ],
    orange: [
        'bg-orange-400/20 border-orange-400',
        'checked:bg-orange-400',
        'group-has-hover:border-orange-300',
        'group-has-disabled:bg-orange-400/05 group-has-disabled:border-orange-400/50'
    ],
    red: [
        'bg-red-400/20 border-red-400',
        'checked:bg-red-400',
        'group-has-hover:border-red-300',
        'group-has-disabled:bg-red-400/05 group-has-disabled:border-red-400/50'
    ],
    purple: [
        'bg-purple-400/20 border-purple-400',
        'checked:bg-purple-400',
        'group-has-hover:border-purple-300',
        'group-has-disabled:bg-purple-400/05 group-has-disabled:border-purple-400/50'
    ],
}

export default function Checkbox({
    variant = 'blue',
    label,
    className,
    ...props
}: CheckboxProps) {
    return (
        <label className='group inline-flex items-center gap-2 cursor-pointer has-disabled:cursor-not-allowed select-none'>
            <input type='checkbox' className='sr-only' {...props} />
            <div
                className={cn(
                    'w-8 h-8 border-2 flex items-center justify-center transition-colors',
                    variantStyles[variant]
                )}
            >
                <div
                    className={cn(
                        'w-1/2 h-1/2 scale-0 transition-all duration-200 group-has-checked:scale-100',
                        {
                            'bg-blue-400 group-has-hover:bg-blue-300 group-has-disabled:bg-blue-400/50': variant === 'blue',
                            'bg-green-400 group-has-hover:bg-green-300 group-has-disabled:bg-green-400/50': variant === 'green',
                            'bg-orange-400 group-has-hover:bg-orange-300 group-has-disabled:bg-orange-400/50': variant === 'orange',
                            'bg-red-400 group-has-hover:bg-red-300 group-has-disabled:bg-red-400/50': variant === 'red',
                            'bg-purple-400 group-has-hover:bg-purple-300 group-has-disabled:bg-purple-400/50': variant === 'purple',
                        }
                    )}
                />
            </div>

            {label && <span>{label}</span>}
        </label>
    )
}