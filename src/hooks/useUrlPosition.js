/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
  const [serarchParams, setSearchParams] = useSearchParams();
  const lat = serarchParams.get("lat");
  const lng = serarchParams.get("lng");

  return [lat, lng];
}

export default useUrlPosition;
