import {useState, useEffect} from 'react';
export const usePosition = () => {
  const [position, setPosition] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  
  // success: callback function takes a coords object as an input parameter
  const success = ({coords}) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
  };

  // error: callback function that takes a GeolocationPositionError object as an input parameter.
  const error = err => setErrorMsg(err.message)

  useEffect(() => {
    const geo = navigator.geolocation
    // Check if the browser is supporting navigator.geolocation
    if (!geo) {
      setErrorMsg('Geolocation is not supported')
      return
    }
    // navigator.geolocation.watchPosition(success, error, options)
    // The ID number returned by the Geolocation.watchPosition() method when installing the handler you wish to remove.
    const id = geo.watchPosition(success, error);

    // The ID can be passed to the Geolocation.clearWatch() to unregister the handler.
    return () => geo.clearWatch(id);
  }, []);
  return {...position, errorMsg};
}

