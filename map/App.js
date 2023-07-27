import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
const App = () => {
  const [mapRegion, setmapRegion] = useState({markers: [{
    title: 'hello',
    coordinates: {
      latitude: 3.148561,
      longitude: 101.652778
    },
  },
  {
    title: 'hello',
    coordinates: {
      latitude: 3.149771,
      longitude: 101.655449
    },  
  }]}
)

  
  
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '75%' }}
        region={mapRegion}
      >
        {mapRegion.map}
      </MapView>
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});