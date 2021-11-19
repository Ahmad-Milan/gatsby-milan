const updateStoreProps = (formState, selectedStore) => {
  formState.store.salesforceValue = selectedStore.salesforceValue
  formState.store.zipcode = selectedStore.zipcode
  formState.store.address = selectedStore.address
  formState.store.location = selectedStore.location
  formState.store.locationOnAddress = selectedStore.locationOnAddress
  formState.store.stateShort = selectedStore.stateShort
  formState.store.open = selectedStore.open
}

export default updateStoreProps