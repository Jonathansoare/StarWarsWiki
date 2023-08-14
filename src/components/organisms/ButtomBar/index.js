import { Ionicons } from '@expo/vector-icons'
import { BottomBarContainer,BarItem } from './styles';
import { Text } from '~/components/atoms';
import { theme } from '~/styles';

//<Ionicons name={routeIcons[route.name]} size={size} color={color}/>

const routeIcons = {
  "Home":"home-outline",
  "Favorites":"heart-outline",
  "Search":"search-outline"
}

export const ButtomBar =({ state, descriptors, navigation }) => {
  return (
    <BottomBarContainer style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BarItem
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Ionicons 
                name={routeIcons[route.name]}
                color={isFocused ? theme.colors.red : theme.colors.ligth}
                size={theme.metrics.px(20)}
                />
            <Text 
            fontFamily="semiBold" 
            color={isFocused ? "red" : "white"}
            size={10}>
              {label}
            </Text>
          </BarItem>
        );
      })}
    </BottomBarContainer>
  );
}