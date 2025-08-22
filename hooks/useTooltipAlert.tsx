"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function useTooltipAlert() {
  const [tooltip, setTooltip] = useState<{ message: string; position: { x: number; y: number } } | null>(null);

  const showTooltip = useCallback((message: string, element?: HTMLElement) => {
    let position = { x: 0, y: 0 };
    
    if (element) {
      const rect = element.getBoundingClientRect();
      position = {
        x: rect.left + rect.width / 2,
        y: rect.top - 10
      };
    }

    setTooltip({ message, position });
    
    setTimeout(() => {
      setTooltip(null);
    }, 2000);
  }, []);

  const TooltipContainer = useCallback(() => (
    <AnimatePresence>
      {tooltip && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg"
            style={{
              left: tooltip.position.x,
              top: tooltip.position.y,
              transform: 'translateX(-50%)'
            }}
          >
            {tooltip.message}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-gray-700"></div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  ), [tooltip]);

  return { showTooltip, TooltipContainer };
}