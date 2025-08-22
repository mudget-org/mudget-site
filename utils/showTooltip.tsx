import { toast } from 'sonner';

export function showCopiedTooltip(message: string = "Copied to clipboard!") {
  // Create a simple tooltip that appears at the cursor
  const tooltip = document.createElement('div');
  tooltip.textContent = message;
  tooltip.className = 'fixed z-50 px-3 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg pointer-events-none transition-opacity duration-200';
  tooltip.style.left = '50%';
  tooltip.style.top = '50%';
  tooltip.style.transform = 'translate(-50%, -50%)';
  
  document.body.appendChild(tooltip);
  
  // Animate in
  requestAnimationFrame(() => {
    tooltip.style.opacity = '1';
  });
  
  // Remove after 2 seconds
  setTimeout(() => {
    tooltip.style.opacity = '0';
    setTimeout(() => {
      if (document.body.contains(tooltip)) {
        document.body.removeChild(tooltip);
      }
    }, 200);
  }, 2000);
}