import stores from '../../data/stores.json'

function openStoresTotal() {
  let total = 0
  stores.locations.forEach(state => {
    state.stores.forEach(city => {
      let open = city.locations.reduce((acc, location) => acc + location.open, 0)
      total += open
    })
  })
  return total
}

// Round the total number down to the highest multiple of 5
function openStoresDisplayed() {
  let displayed = openStoresTotal()
  displayed -= displayed % 5
  return displayed
}

export default openStoresDisplayed