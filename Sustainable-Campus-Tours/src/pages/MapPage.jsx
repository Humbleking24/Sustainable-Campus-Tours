import React from "react";
import CampusMap from "../map.jsx";
import { Link } from "react-router-dom";

const MapPage = () => {
  return (
    <div className="relative h-screen w-screen">
      {/* Back button */}
      <Link
        to="/"
        className="absolute top-4 left-4 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-100 z-10"
      >
        ← Back
      </Link>

      {/* Map */}
      <CampusMap />
    </div>
  );
};

export default MapPage;
