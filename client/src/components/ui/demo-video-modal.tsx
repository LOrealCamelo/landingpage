import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

export function DemoVideoModal({ isOpen, onClose, videoSrc, title }: DemoVideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display mb-4">{title}</DialogTitle>
        </DialogHeader>
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <video 
            className="w-full h-full object-cover" 
            controls 
            autoPlay
            src={videoSrc}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function useDemoVideoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoConfig, setVideoConfig] = useState({
    src: '',
    title: ''
  });

  const openModal = (src: string, title: string) => {
    setVideoConfig({ src, title });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    videoConfig,
    openModal,
    closeModal,
    DemoVideoModalComponent: (
      <DemoVideoModal 
        isOpen={isOpen} 
        onClose={closeModal} 
        videoSrc={videoConfig.src} 
        title={videoConfig.title} 
      />
    )
  };
}