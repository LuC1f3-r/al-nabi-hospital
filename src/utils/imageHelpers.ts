export const buildResponsiveSrcSet = (
  url: string,
  widths: number[] = [400, 600, 900, 1200]
): string | undefined => {
  const match = url.match(/w=(\d+)/);

  if (!match) {
    return undefined;
  }

  const maxWidth = parseInt(match[1], 10);
  const candidates = new Set(widths.concat(maxWidth));
  const sortedWidths = Array.from(candidates)
    .filter((width) => width <= maxWidth)
    .sort((a, b) => a - b);

  if (sortedWidths.length === 0) {
    return undefined;
  }

  return sortedWidths
    .map((width) => `${url.replace(/w=\d+/, `w=${width}`)} ${width}w`)
    .join(', ');
};

export default buildResponsiveSrcSet;
