const imageExists = path => new Promise(resolve => {
  const img = new Image();
  img.onload = () => resolve({path, status: 'ok'})
  img.onerror = () => resolve({path, status: 'Image Not Found!'})

  img.src = path
})

export default imageExists