function getStoresInStateNum(state) {
  let totalNum = 0
  state.stores.forEach(city => {
    totalNum += city.locations.length
  })
  return totalNum
}

export default getStoresInStateNum
