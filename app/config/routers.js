import { createAppContainer, createStackNavigator } from "react-navigation";

import { Home } from "../screens/Home";
import { Filters } from "../screens/Filters";
import { Genres } from "../screens/Genres";

const HeaderStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Filters: {
      screen: Filters,
      navigationOptions: {
        headerTitle: "Filters"
      }
    },
    Genres: {
      screen: Genres,
      navigationOptions: {
        headerTitle: "Choose genres"
      }
    }
  },
  {
    headerMode: "screen"
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: HeaderStack
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
