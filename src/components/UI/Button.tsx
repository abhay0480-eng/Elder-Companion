import { cn } from "../../utils/cn";

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    size?: ButtonSize
    loading?: boolean
    children: React.ReactNode
}

const variantStyles: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-card hover:opacity-90 shadow-sm',
    secondary: 'bg-secondary text-near-black hover:opacity-80 shadow-sm',
    ghost: 'text-olive-gray hover:bg-secondary/50 hover:text-near-black'
}

const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-xs rounded-btn',
    md: 'h-10 px-4 py-2 text-sm rounded-btn',
    lg: 'h-12 px-8 text-base rounded-btn'
}
const Button = ({
    variant = "primary",
    size = 'md',
    loading = false,
    className,
    children,
    disabled,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring-warm disabled:pointer-events-none disabled:opacity-50",
                variantStyles[variant],
                sizeStyles[size],
                className
            )}
            disabled={disabled || loading}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button
