import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store, {persistor} from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "./src/navigators/AppNavigator";
import { FontProvider } from "./src/utils/helpers";

export default function App() {
  return (
    <FontProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar style="auto" />
          <AppNavigator />
        </PersistGate>
      </Provider>
    </FontProvider>
  );
}
