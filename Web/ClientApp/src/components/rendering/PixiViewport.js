import { PixiComponent, useApp } from "@inlet/react-pixi";
import { Viewport } from "pixi-viewport";
import React from "react";

const withApp = (Component) => (props) => {
    const app = useApp();
    return <Component app={app} {...props} />;
};

export default withApp(
    PixiComponent("Viewport", {
        create: ({ app }) => {
            let viewport = new Viewport({
                interaction: app.renderer.plugins.interaction,
            });
            viewport
                .drag({
                    mouseButtons: "left",
                })
                .pinch()
                .wheel()
                .clampZoom({
                    maxScale: 12,
                    minScale: 1,
                });
            return viewport;
        },
        willUnmount: (instance) => instance.destroy(),
        applyProps: (instance, oldProps, newProps) => {
            if (
                !oldProps ||
                oldProps.width !== newProps.width ||
                oldProps.height !== newProps.height
            ) {
                instance.resize(newProps.width, newProps.height);
            }
            if (oldProps.onZoomChange !== newProps.onZoomChange) {
                instance._onZoomChange && instance.removeListener("zoomed", instance._onZoomChange);

                instance._onZoomChange = () => {
                    newProps.onZoomChange(instance.scaled);
                };

                instance.on("zoomed", instance._onZoomChange);
            }
        },
    })
);
