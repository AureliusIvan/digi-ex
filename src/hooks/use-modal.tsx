// useModal.tsx
import { useState } from 'react';

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false) as [boolean, (value: boolean) => void];
  const open = () => setIsOpen(true) as void;
  const close = () => setIsOpen(false) as void;

  return { isOpen, open, close };
}