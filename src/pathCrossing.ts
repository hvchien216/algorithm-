const isPathCrossing = (path: string): boolean => {
  let x = 0,
    y = 0;
  const pathMappings: Record<string, boolean> = {
    [`${x},${y}`]: true,
  };

  for (const key of path) {
    switch (key) {
      case 'N':
        y++;
        break;
      case 'S':
        y--;
        break;

      case 'E':
        x++;
        break;

      case 'W':
        x--;
        break;
    }

    if (pathMappings[`${x},${y}`]) {
      return true;
    } else {
      pathMappings[`${x},${y}`] = true;
    }
  }

  return false;
};

const testCases: string[] = ['NES', 'NESWW'];

for (const arr of testCases) {
  const expect = isPathCrossing(arr);
  console.log(expect);
}

export {};
