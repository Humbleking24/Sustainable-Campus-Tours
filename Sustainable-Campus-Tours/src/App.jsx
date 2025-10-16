import CampusMap from './map.jsx';

function App() {
  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      {/* Heading overlay */}
      <h1
        style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          zIndex: 1000,
          backgroundColor: 'rgba(0,0,0,0.4)',
          padding: '10px 20px',
          borderRadius: '10px',
          fontSize: '24px'
        }}
      >
        🌿 Sustainable Campus Tours 🌿
      </h1>

      {/* Full-page campus map */}
      <CampusMap />
    </div>
  );
}

export default App;
