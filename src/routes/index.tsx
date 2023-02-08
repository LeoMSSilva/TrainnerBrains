import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { StudySchedule } from '../pages/StudySchedule';
import { FastReading } from '../pages/FastReading';
import { Memorization } from '../pages/Memorization';
import { Pomodoro } from '../pages/Pomodoro';
import { SelectTraining } from '../pages/SelectTraining';
import { Welcome } from '../pages/Welcome';

export type IStackRoutesList = {
  Welcome: undefined;
  SelectTraining: undefined;
  FastReading: undefined;
  Pomodoro: undefined;
  Memorization: undefined;
};

const { Navigator, Screen } = createStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen
          name="Welcome"
          component={Welcome}
        />
        <Screen
          name="SelectTraining"
          component={SelectTraining}
        />
        <Screen
          name="FastReading"
          component={FastReading}
        />
        <Screen
          name="Pomodoro"
          component={Pomodoro}
        />
        <Screen
          name="Memorization"
          component={Memorization}
        />
        {/* <Screen name="StudySchedule" component={StudySchedule} /> */}
      </Navigator>
    </NavigationContainer>
  );
};
