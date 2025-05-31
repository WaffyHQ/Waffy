"use client"

import React from "react"
import { X, CheckCircle, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

export type ToastType = "default" | "success" | "error" | "warning" | "info"

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toastVariants> {
  title: string
  description?: string
  type?: ToastType
  onClose?: () => void
}

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between overflow-hidden rounded-lg border p-4 shadow-lg transition-all",
  {
    variants: {
      variant: {
        success:
          "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-300",
        error: "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-300",
        warning:
          "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-300",
        info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-300",
        default: "border-gray-200 bg-white text-gray-900 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

const iconMap: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle className="h-5 w-5" />,
  error: <AlertCircle className="h-5 w-5" />,
  warning: <AlertTriangle className="h-5 w-5" />,
  info: <Info className="h-5 w-5" />,
  default: null,
}

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, title, description, type = "default", onClose, ...props }, ref) => {
    const icon = type !== "default" ? iconMap[type as ToastType] : null

    return (
      <div ref={ref} className={cn(toastVariants({ variant: type as VariantProps<typeof toastVariants>["variant"] }), className)} {...props}>
        <div className="flex items-start gap-3">
          {icon && <div className="shrink-0">{icon}</div>}
          <div className="flex-1">
            <h3 className="font-medium leading-none tracking-tight">{title}</h3>
            {description && <div className="mt-1 text-sm opacity-90">{description}</div>}
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-4 shrink-0 rounded-md p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close notification"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    )
  },
)

Toast.displayName = "Toast"
