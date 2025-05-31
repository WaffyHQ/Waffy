"use client"

import type React from "react"
import { createContext, useCallback, useContext, useState } from "react"
import { Toast, type ToastType } from "./toast"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "framer-motion"

export interface ToastOptions {
  id?: string
  title: string
  description?: string
  type?: ToastType
  duration?: number
}

interface ToastContextValue {
  toast: (options: ToastOptions) => void
  success: (options: Omit<ToastOptions, "type">) => void
  error: (options: Omit<ToastOptions, "type">) => void
  warning: (options: Omit<ToastOptions, "type">) => void
  info: (options: Omit<ToastOptions, "type">) => void
  dismiss: (id: string) => void
  dismissAll: () => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export interface ToastProviderProps {
  children: React.ReactNode
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"
  maxToasts?: number
}

interface ToastInstance extends ToastOptions {
  id: string
  createdAt: Date
}

const POSITIONS = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "top-center": "top-0 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children, position = "top-right", maxToasts = 5 }) => {
  const [toasts, setToasts] = useState<ToastInstance[]>([])

  const dismiss = useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }, [])

  const createToast = useCallback(
    (options: ToastOptions) => {
      const id = options.id || Math.random().toString(36).substring(2, 9)
      const toast: ToastInstance = {
        id,
        title: options.title,
        description: options.description,
        type: options.type || "default",
        duration: options.duration || 5000,
        createdAt: new Date(),
      }

      setToasts((prevToasts) => {
        const newToasts = [toast, ...prevToasts].slice(0, maxToasts)
        return newToasts
      })

      if (toast.duration !== Number.POSITIVE_INFINITY) {
        setTimeout(() => {
          dismiss(id)
        }, toast.duration)
      }

      return id
    },
    [maxToasts, dismiss],
  )

  const dismissAll = useCallback(() => {
    setToasts([])
  }, [])

  const success = useCallback(
    (options: Omit<ToastOptions, "type">) => {
      return createToast({ ...options, type: "success" })
    },
    [createToast],
  )

  const error = useCallback(
    (options: Omit<ToastOptions, "type">) => {
      return createToast({ ...options, type: "error" })
    },
    [createToast],
  )

  const warning = useCallback(
    (options: Omit<ToastOptions, "type">) => {
      return createToast({ ...options, type: "warning" })
    },
    [createToast],
  )

  const info = useCallback(
    (options: Omit<ToastOptions, "type">) => {
      return createToast({ ...options, type: "info" })
    },
    [createToast],
  )

  const contextValue: ToastContextValue = {
    toast: createToast,
    success,
    error,
    warning,
    info,
    dismiss,
    dismissAll,
  }

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {typeof window !== "undefined" &&
        createPortal(
          <div
            aria-live="polite"
            aria-atomic="true"
            className={`fixed z-50 flex flex-col gap-2 p-4 max-h-screen w-full sm:max-w-sm pointer-events-none ${POSITIONS[position]}`}
          >
            <AnimatePresence>
              {toasts.map((toast) => (
                <motion.div
                  key={toast.id}
                  initial={{ opacity: 0, y: position.startsWith("top") ? -15 : 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="pointer-events-auto"
                >
                  <Toast
                    title={toast.title}
                    description={toast.description}
                    type={toast.type}
                    onClose={() => dismiss(toast.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>,
          document.body,
        )}
    </ToastContext.Provider>
  )
}

export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}
