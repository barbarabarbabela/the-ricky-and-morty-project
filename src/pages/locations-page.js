import React from "react";
import PageLayout from "./page-layout";
import LocationContext, { LocationProvider } from "../context/location-context";
import useLocationContext from "../hooks/use-location-context";

function LocationsPage() {
  const { locationData } = useLocationContext;

  console.log(locationData);

  return (
    <LocationProvider>
      <PageLayout>Locations</PageLayout>;
    </LocationProvider>
  );
}

export default LocationsPage;
