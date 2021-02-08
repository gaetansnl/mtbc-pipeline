import React, { useState, useCallback } from "react";
import { Container, PixiComponent } from "@inlet/react-pixi";
import { Graphics } from "pixi.js";
import { asPoint, toRect } from "components/rendering/utils";

const Selection = React.memo(
    PixiComponent("Selection", {
        create: () => new Graphics(),
        willUnmount(instance) {
            instance.destroy();
        },
        applyProps: (instance, _, props) => {
            const { from, to, color, hidden } = props;
            instance.clear();
            if (hidden) return;
            const { x, y, width, height } = toRect(from, to);
            if (width === 0 || height === 0) return;
            instance.lineStyle(2, color, 1);
            instance.beginFill(color, 0.2);
            instance.drawRect(x, y, width, height);
        },
    })
);

const PixiDrawableRect = ({ children, color, onEnd }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [startPoint, setStartPoint] = useState(false);
    const [currentPosition, setCurrentPosition] = useState(false);
    const handleDragMove = useCallback((e) => {
        const newPosition = e.data.getLocalPosition(e.currentTarget);
        setCurrentPosition(asPoint(newPosition.x, newPosition.y));
    }, []);
    const handleDragEnd = useCallback(() => {
        isDragging && onEnd && onEnd(startPoint, currentPosition);
        setIsDragging(false);
    }, [currentPosition, isDragging, onEnd, startPoint]);
    const containsPoint = useCallback(() => true, []);
    const handleDragStart = useCallback((e) => {
        if (e.data.originalEvent.button !== 2) return;
        const newPosition = e.data.getLocalPosition(e.currentTarget);
        setStartPoint(asPoint(newPosition.x, newPosition.y));
        setIsDragging(true);
    }, []);
    return (
        <Container
            containsPoint={containsPoint}
            interactive={true}
            pointerdown={handleDragStart}
            pointerup={handleDragEnd}
            pointerupoutside={handleDragEnd}
            pointermove={handleDragMove}
        >
            {children}
            <Selection hidden={!isDragging} from={startPoint} to={currentPosition} color={color} />
        </Container>
    );
};

PixiDrawableRect.propTypes = {};

PixiDrawableRect.defaultProps = {};
export default PixiDrawableRect;
