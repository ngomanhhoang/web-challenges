import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function ISSTracker() {
  const { data, error, isLoading, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });
  if (error) return <p>❌ Error</p>;
  if (isLoading) return <p>⏳ Loading...</p>;
  console.log(data);
  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}

// const [coords, setCoords] = useState({
//   longitude: 0,
//   latitude: 0,
// });

// async function getISSCoords() {
//   try {
//     const response = await fetch(URL);
//     if (response.ok) {
//       const data = await response.json();
//       setCoords({ longitude: data.longitude, latitude: data.latitude });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// useEffect(() => {
//   const timer = setInterval(() => {
//     getISSCoords();
//   }, 5000);

//   return () => {
//     clearInterval(timer);
//   };
// }, []);
