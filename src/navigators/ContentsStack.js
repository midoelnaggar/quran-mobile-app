import { createStackNavigator } from "@react-navigation/stack";
import ContentsScreen from "../screens/ContentsScreen";
import SuraScreen from "../screens/SuraScreen";

const ContentsStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contents"
        component={ContentsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Sura"
        component={SuraScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ContentsStack;
