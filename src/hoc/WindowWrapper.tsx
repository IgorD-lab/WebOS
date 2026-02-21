import React, {
  useRef,
  ComponentType,
  ReactElement,
  useLayoutEffect,
} from 'react';
// We use 'import type' to ensure these are erased at runtime
import type { WindowID } from '#types';
import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

/**
 * WindowWrapper is a "Higher-Order Component" (HOC).
 * Think of it like a "Gift Wrap":
 * It takes a raw component (the gift) and puts it inside a
 * styled window frame (the box) with logic (the ribbon).
 */
const WindowWrapper = <P extends object>(
  Component: ComponentType<P>,
  windowKey: WindowID,
): ((props: P) => ReactElement | null) => {
  // This is the actual component that gets rendered
  const Wrapped = (props: P) => {
    // 1. Grab the global window state and the focus function from our store
    const { focusWindow, windows } = useWindowStore();

    // 2. Look up the specific data for THIS window (e.g., terminal or safari)
    const { isOpen, zIndex } = windows[windowKey];

    // 3. A 'ref' gives us a direct handle to the HTML element if we need
    // to measure it or manipulate it outside of React's normal flow.
    const ref = useRef<HTMLElement>(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = 'block';

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' },
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    // make all windows closed by default
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? 'block' : 'none';
    }, [isOpen]);

    return (
      /* 4. The Wrapper Frame:
         - 'id': Helps us identify the window in the DOM.
         - 'style': We apply the zIndex dynamically so this window can sit on top of others.
         - 'onMouseDown': When the user clicks the window, we tell the store to "focus" it.
      */
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        {/* 5. The Original Component:
            We pass all the 'props' through to the original component 
            so it functions exactly as it did before it was wrapped. */}
        <Component {...props} />
      </section>
    );
  };

  // 6. This helps with debugging. In React DevTools, instead of "Unknown",
  // it will show "WindowWrapper(Terminal)".
  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

  return Wrapped;
};

export default WindowWrapper;
