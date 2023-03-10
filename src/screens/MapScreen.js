import MapView, { Marker } from "react-native-maps";
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const initialRegion = {
  latittude: 48.8583486,
  longitude: 2.2244437,
};

const MapScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();

  const handleSelectedLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  const handleSaveLocation = () => {
    /* console.log(selectedLocation);*/
    navigation.navigate("Nuevo", { 
      mapLocation: {
        lat: 0.06587304174900055,
        lng: 52.24742074398264,
      },
    });
  };


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={handleSaveLocation}>
          <Ionicons name="md-save-outline" color="blue" size={22} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <MapView
      provider="google"
      initialRegion={initialRegion}
      style={styles.container}
      onPress={handleSelectedLocation}      
    >
      {selectedLocation && (
        <Marker
          title="Ubicación seleccionada"
          coordinate={{
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng,
          }}
        />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
