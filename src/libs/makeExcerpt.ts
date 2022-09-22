
export const makeExcerpt = (text: string, limit: number): string => {
  if (text.length > limit) {
    const limitedText = text.split("").reduce((acculate, current, i) => {
      i < limit ? acculate = acculate + current : acculate;
      return acculate
    })
    const excerpt = `${limitedText}...`
    return excerpt
  }

  return text
}