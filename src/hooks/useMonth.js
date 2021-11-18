
function useMonth() {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let current_month = months[new Date().getMonth()]
  return current_month
}

export default useMonth
