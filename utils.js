const utils = {
  withGrid(number) {
    return number * 32;
  },

  asGridCord(x, y) {
    return `${x * 32},${y * 32}`;
  },

  nextPosition(initialX, initialY, direction) {
    let x = initialX;
    let y = initialY;
    const size = 32;
    if (direction === "left") {
      x -= size;
    } else if (direction === "right") {
      x += size;
    } else if (direction === "up") {
      y -= size;
    } else if (direction === "down") {
      y += size;
    }
    return { x, y };
  },
};
