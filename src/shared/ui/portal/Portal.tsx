import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import { createPortal } from 'react-dom';

interface PortalProps {
  container?: Element | DocumentFragment;
  children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ children }) => {
  // const ref = useRef() as MutableRefObject<HTMLElement | null>;
  const ref = useRef<HTMLElement | null>(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector('#root');
    setMounted(true);
  }, []);

  return mounted && ref.current ? createPortal(children, ref.current) : null;
};
