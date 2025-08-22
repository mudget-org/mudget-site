"use client";

import React, { useRef } from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TooltipAlert } from "@/components/ui/tooltip-alert";

interface CopyLinkButtonProps {
  url: string;
  className?: string;
}

export default function CopyLinkButton({ url, className = "" }: CopyLinkButtonProps) {
  const tooltipRef = useRef<{ showAlert: () => void }>(null);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      tooltipRef.current?.showAlert();
    } catch (error) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      tooltipRef.current?.showAlert();
    }
  };

  return (
    <TooltipAlert ref={tooltipRef} message="Link copied to clipboard!">
      <Button
        onClick={handleCopyLink}
        variant="outline"
        size="sm"
        className={`flex items-center gap-2 mb-4 ${className}`}
      >
        <Copy className="w-4 h-4" />
        Copy Link
      </Button>
    </TooltipAlert>
  );
}