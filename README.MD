# react-native-styles-flexbox-grid
> Flexbox grid system styles for react native.

## usage:
+ import:
```bash
import {row, col, box} from 'react-native-styles-flexbox-grid';
```

+ code:
```jsx
<View style={[styles.container]}>
  <Text style={[styles.welcome]}>Hello RN!</Text>
  <View style={[row.$,styles.h50, styles.bd1,Row.center]}>
    <View style={[col.$]}>
      <Text style={[styles.tc]}>Col1</Text>
    </View>
    <View style={[col.$]}>
      <Text style={[styles.tc]}>Col1</Text>
    </View>
    <View style={[col.$]}>
      <Text style={[styles.tc]}>Col1</Text>
    </View>
  </View>
</View>
```


## attention:
```bash
react-native init --version="0.44.0" test
yarn start -- --reset-cache
```

## resources:

## todos:
- [ ] width map for react native.
- [ ] finish test demo
