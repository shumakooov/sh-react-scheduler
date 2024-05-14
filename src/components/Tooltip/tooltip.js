import React, { useEffect, useRef } from "react";
import { useTooltip } from './tooltip.hooks'
import styles from './tooltip.module.css'

const Tooltip = ({ children, elementRef, parentRef }) => {
    const tooltipRef = useRef(null);
    const { position, isVisible, onMouseEnter, onMouseLeave } = useTooltip({ elementRef, parentRef, tooltipRef });

    useEffect(() => {
        const element = elementRef?.current;

        if (element) {
            element.addEventListener("mouseenter", onMouseEnter);
            element.addEventListener("mouseleave", onMouseLeave);
        }

        return () => {
            if (element) {
                element.removeEventListener("mouseenter", onMouseEnter);
                element.removeEventListener("mouseleave", onMouseLeave);
            }
        };
    }, [elementRef, onMouseEnter, onMouseLeave]);

    if (!isVisible) return null;

    return (
        <div
            ref={tooltipRef}
            className={styles.tooltipContainer}
            style={{ top: position.top, left: position.left }}
        >
            {children}
        </div>
    )
}

export default Tooltip;