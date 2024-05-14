import { useCallback, useEffect, useState } from "react";

export function useTooltip({ elementRef, parentRef, tooltipRef }) {
    const [isVisible, setIsVisible] = useState(false);
    const [position, setPosition] = useState({});

    useEffect(() => {
        if (!elementRef.current) {
            return;
        }

        if (isVisible) {
            const { left, width, bottom } = elementRef.current.getBoundingClientRect();
            const parentPos = parentRef.current.getBoundingClientRect();
            const tooltipWidth = tooltipRef?.current?.getBoundingClientRect().width || 0;

            // const middle = left + width / 2 - tooltipWidth / 2;

            // const verticalOffset = 12
            setPosition({
                top: bottom - parentPos.top - 46,
                left: left,
                width,
            });
        }

        if (!isVisible) {
            setPosition({});
        }
    }, [isVisible, elementRef]);

    const onMouseEnter = useCallback(() => {
        setIsVisible(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setIsVisible(false);
    }, []);

    return {
        position: {
            top: position.top ?? 0,
            left: position.left ?? 0,
            width: position.width ?? 0,
        },
        isVisible,
        onMouseEnter,
        onMouseLeave,
    };
}