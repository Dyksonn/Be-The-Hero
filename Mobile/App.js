import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React, { useState, useEffect } from "react";
import { View, Image } from "react-native";
import { SplashScreen } from "expo";
import { Asset } from "expo-asset";

import Routes from "./src/routes";

export default function App() {
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHide();
  }, []);

  async function _cacheSplashResourcesAsync() {
    const gif = require("./assets/splash.png");
    return Asset.fromModule(gif).downloadAsync();
  }

  async function _cacheResourcesAsync() {
    SplashScreen.hide();
    const images = [
      require("./assets/icon.png"),
      require("./assets/splash.png")
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    setReady(true);
  }

  if (!isReady) {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={require("./assets/splash.png")}
          onLoad={_cacheResourcesAsync}
        />
      </View>
    );
  }
  return <Routes />;
}
