function getStoresInStateNum(state) {
  let totalNum = 0
  state.cities.forEach(city => {
    totalNum += city.locations.length
  })
  return totalNum
}

export default getStoresInStateNum
