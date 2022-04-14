export const accessorNumberView = (content: number | string, toFixed = 2): number | string => {
  if (typeof content === 'number') {
    return content.toFixed(toFixed)
  } else {
    const result = parseFloat(content).toFixed(toFixed)
    return result ? result : '-'
  }
}
