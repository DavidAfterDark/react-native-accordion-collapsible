import React, { type ReactElement } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  type ViewProps,
  Image,
  type TextProps,
} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

//  components

const chevron = require('./chevron.png');

interface AccordionProps {
  children: ReactElement;
  headerText: string;
  iconRight?: ReactElement;
  style?: ViewProps['style'];
  styleContent?: ViewProps['style'];
  styleHeader?: ViewProps['style'];
  styleHeaderIconContainer?: ViewProps['style'];
  styleHeaderText?: TextProps['style'];
}

export default function Accordion(props: AccordionProps): React.ReactElement {
  const open = useSharedValue<boolean>(false);

  const heightValue = useSharedValue<number>(0);

  const contentRef = useAnimatedRef<Animated.View>();

  const derivedValue = useDerivedValue(() => {
    return open.value ? withTiming(1) : withTiming(0);
  });

  const animatedIconStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${derivedValue.value * -180}deg` }],
    };
  });

  const animatedHeightStyles = useAnimatedStyle(() => {
    return {
      height: interpolate(
        derivedValue.value,
        [0, 1],
        [0, heightValue.value],
        Extrapolation.CLAMP
      ),
    };
  });

  const onPressHeader = (): void => {
    open.value = !open.value;

    if (heightValue.value === 0) {
      runOnUI(() => {
        heightValue.value = measure(contentRef)?.height ?? 0;
      })();
    }
  };

  return (
    <View style={[styles.container, props.style]}>
      <Pressable
        style={[styles.header, props.styleHeader]}
        onPress={onPressHeader}
      >
        <Text style={[styles.headerText, props.styleHeaderText]}>
          {props.headerText}
        </Text>

        <Animated.View
          style={[
            styles.headerIcon,
            animatedIconStyles,
            props.styleHeaderIconContainer,
          ]}
        >
          {props.iconRight ?? (
            <Image source={chevron} style={styles.imageChevron} />
          )}
        </Animated.View>
      </Pressable>

      <Animated.View style={animatedHeightStyles}>
        <Animated.View
          ref={contentRef}
          style={[styles.contentContainer, props.styleContent]}
        >
          {props.children}
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    gap: 10,
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    width: '91%',
  },
  headerIcon: {},
  imageChevron: {},
  contentContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
});
