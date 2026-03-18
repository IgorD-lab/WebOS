import React, { useRef, ComponentType, ReactElement } from 'react';
// We use 'import type' to ensure these are erased at runtime
import type { WindowKey } from '#store/window';
import useWindowStore from '#store/window';

/**
 * WindowWrapper is a "Higher-Order Component" (HOC).
 * Think of it like a "Gift Wrap":
 * It takes a raw component (the gift) and puts it inside a
 * styled window frame (the box) with logic (the ribbon).
 */
const WindowWrapper = <P extends object>(
  Component: ComponentType<P>,
  windowKey: WindowKey,
): ((props: P) => ReactElement | null) => {
  // This is the actual component that gets rendered
  const Wrapped = (props: P) => {
    // 1. Grab the global window state and the focus function from our store
    const { focusWindow, windows } = useWindowStore();

    // 2. Look up the specific data for THIS window (e.g., terminal or safari)
    const windowState = windows[windowKey];

    // 3. A 'ref' gives us a direct handle to the HTML element if we need
    // to measure it or manipulate it outside of React's normal flow.
    const ref = useRef<HTMLElement>(null);

    // 4. Guard Clause: If the store says this window isn't open,
    // we return null (render nothing at all).
    if (!windowState.isOpen) return null;

    return (
      /* 5. The Wrapper Frame:
         - 'id': Helps us identify the window in the DOM.
         - 'style': We apply the zIndex dynamically so this window can sit on top of others.
         - 'onMouseDown': When the user clicks the window, we tell the store to "focus" it.
      */
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex: windowState.zIndex }}
        className="absolute"
        onMouseDown={() => focusWindow(windowKey)}
      >
        {/* 6. The Original Component:
            We pass all the 'props' through to the original component 
            so it functions exactly as it did before it was wrapped. */}
        <Component {...props} />
      </section>
    );
  };

  // 7. This helps with debugging. In React DevTools, instead of "Unknown",
  // it will show "WindowWrapper(Terminal)".
  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

  return Wrapped;
};

export default WindowWrapper;
