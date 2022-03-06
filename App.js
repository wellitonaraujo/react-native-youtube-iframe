import React, { useState, useCallback } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const App = () => {
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Um video sobre nossa plataforma</Text>
      <YoutubePlayer
        height={370}
        width={370}
        play={playing}
        videoId={"fieqge7aYJM"}
        onChangeState={onStateChange}
      />

          <Button  color="#841584" title={playing ? "PAUSAR" : "INICIAR"} onPress={togglePlaying} />
    </View>
    
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 50
  },
  a: {
    fontSize: 40
  },

  a: {
    fontSize: 40,
    width: 100,
    height: 60
  },

  title: {
    fontSize: 18,
    marginBottom: 15
  }
})
