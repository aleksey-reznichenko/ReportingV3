interface IAccessorNumberView {
  (content: number | string, toFixed?: number): number | string
}

const accessorNumberView: IAccessorNumberView = (content, toFixed = 2) => {
  if (typeof content === 'number') {
    return content.toFixed(toFixed)
  } else {
    const result = parseFloat(content).toFixed(toFixed)
    return result ? result : '-'
  }
}

export default accessorNumberView
