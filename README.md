# react-native-accordion-collapsible

[![Reanimated v2 version](https://img.shields.io/github/package-json/v/gorhom/react-native-bottom-sheet/master?label=Reanimated%20v2&style=flat-square)]() [![npm](https://img.shields.io/npm/l/@gorhom/bottom-sheet?style=flat-square)]() [![npm](https://img.shields.io/badge/types-included-blue?style=flat-square)]() [![runs with expo](https://img.shields.io/badge/Runs%20with%20Expo-4630EB.svg?style=flat-square&logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.io/)

***
Accordion Collapsible component for React Native
***

![demo](./assets/react-native-accordion-collapsible.gif)

## Features
- For iOS and Android
- Full customizable
- Compatible with `Expo`.

## Installation

```sh
npm install react-native-accordion-collapsible react-native-reanimated
```
***required react-native-reanimated v3**
***


## Usage

```js
import { View, Text } from 'react-native'
import Accordion from 'react-native-accordion-collapsible';

// ...

<Accordion headerText='Lorem ipsum' style={styles.accordion} styleContent={accordionContent}>
  <Text>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nam eu massa viverra, malesuada metus sed, malesuada dui.
  </Text>
</Accordion>



const styles = StyleSheet.create({
  accordion: {
    marginTop: 150,
    marginHorizontal: 20
  },
  accordionContent: {
    paddingTop: 10
  }
})

```

## API

| Prop                     | Type                   | Required |  Description      | 
| ------------------------ | ---------------------- | -------- | ----------------- |    
| children                 | ReactNativeElement     | Yes      | Accordion content |
| headerText               | string                 | Yes      | Accordion Title   |
| iconRight                | ReactNativeElement     | No       | chevron icon
| style                    | Styles                 | No       | Accordion styles
| styleContent             | Styles                 | No       | styles for the content container 
| styleHeader              | Styles                 | No       | header container styles 
| styleHeaderIconContainer | Styles                 | No       | styles for iconRight container 
| styleHeaderText          | Styles                 | No       | Styles for header text 


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
