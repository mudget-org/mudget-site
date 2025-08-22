"use client";

import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipAlertProps {
  children: React.ReactNode;
  message: string;
  duration?: number;
}

interface TooltipAlertRef {
  showAlert: () => void;
}

export const TooltipAlert = forwardRef<TooltipAlertRef, TooltipAlertProps>(
  ({ children, message, duration = 2000 }, ref) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const showAlert = () => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), duration);
    };

    useImperativeHandle(ref, () => ({
      showAlert
    }));

    return (
      <div className="relative inline-block">
        {children}
        
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg z-50"
            >
              {message}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-gray-700"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

TooltipAlert.displayName = "TooltipAlert";