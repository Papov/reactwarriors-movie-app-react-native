import { createAppContainer, createStackNavigator } from "react-navigation";

import { Home } from "../screens/Home";
import { Filters } from "../screens/Filters";
import { Genres } from "../screens/Genres";

const FiltersStack = createStackNavigator(
  {
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
    headerMode: "none"
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    Filters: FiltersStack
  },
  {
    mode: "modal"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
