/**
 *  We do it in reverse order they are drawn with circle hit test
 */
export const findNodeAt = (nodes, x, y, scale, nodeSize) => {
    for (let i = nodes.length - 1; i >= 0; i--) {
        const node = nodes[i];
        const xScaled = node.x * scale;
        const yScaled = node.y * scale;
        if ((x - xScaled) ** 2 + (y - yScaled) ** 2 <= nodeSize ** 2) return node;
    }
    return null;
};
export const findNodeIn = (nodes, scale, from, to) => {
    let fromXPos = Math.min(from.x, to.x);
    let toXPos = Math.max(from.x, to.x);
    let fromYPos = Math.min(from.y, to.y);
    let toYPos = Math.max(from.y, to.y);
    return nodes.filter((node) => {
        const xScaled = node.x * scale;
        const yScaled = node.y * scale;
        return fromXPos < xScaled && xScaled < toXPos && fromYPos < yScaled && yScaled < toYPos;
    });
};

export const findNodeMaxPosition = (nodes) => {
    return nodes.reduce((acc, node) => {
        const val = Math.max(Math.abs(node.x), Math.abs(node.y));
        acc = acc === undefined || val > acc ? val : acc;
        return acc;
    }, undefined);
};

export const asPoint = (x, y) => ({ x, y });
export const toRect = ({ x: fromX, y: fromY }, { x: toX, y: toY }) => {
    const width = Math.abs(fromX - toX);
    const height = Math.abs(fromY - toY);
    const x = Math.min(fromX, toX);
    const y = Math.min(fromY, toY);
    return { x, y, width, height };
};
