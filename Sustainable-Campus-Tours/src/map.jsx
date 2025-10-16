import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Flora/fauna icon
const floraIcon = new L.Icon({
  iconUrl: '/plant-pot.png', // put your icon in public/assets
  iconSize: [35, 35],
  iconAnchor: [17, 35],
  popupAnchor: [0, -35],
});

const CampusMap = () => {
  const collegePosition = [26.8439, 75.5652]; // your campus center

  // Campus bounds (NW, SE)
  const campusBounds = [
    [26.8460,75.5623],
    [26.8423, 75.5680],
  ];

  // Sample flora/fauna marker inside campus
  const floraPosition = [26.8442, 75.5650];

  return (
    <MapContainer
      center={collegePosition}
      zoom={17}
      minZoom={16}
      maxZoom={18}
      style={{ height: '100%', width: '100%' }}
      maxBounds={campusBounds}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {/* Campus center marker */}
      <Marker position={collegePosition}>
        <Popup>🎓 Welcome to Your University!</Popup>
      </Marker>

      {/* Sample flora/fauna marker */}
      <Marker position={floraPosition} icon={floraIcon}>
        <Popup>🌿 Test Plant: Mango Tree</Popup>
      </Marker>
    </MapContainer>
  );
};

export default CampusMap;
