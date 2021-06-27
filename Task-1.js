const nums  = "14316342115414321154"
const predefinedNumbers = ["21154", "143", "21154143", "1634", "163421154"]

const makeNumSentences = (str, match) => {
    const result = match.reduce((acc, layer) => {
    if(str.indexOf(layer) === 0) {
      if(str.substring(layer.length).length > 0) {
        const nextLayer = makeNumSentences(str.substring(layer.length), match).map(c => addToLayer(layer, c))
            acc.push(...nextLayer)
      } else {
        acc.push(addToLayer(layer, ""))
      }
    }
    return acc;
  }, [])
  return result
}

const addToLayer = (layer, add) => `:${layer}${add}`

console.log(makeNumSentences(nums,predefinedNumbers))