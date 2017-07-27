# react-native-styles-flexbox-grid
> Flexbox grid system styles for react native.

## usage:
```jsx
<View style={[styles.container]}>
  <Text style={[styles.welcome]}>Hello RN!</Text>
  <View style={[Row.$,styles.h50, styles.bd1,Row.center]}>
    <View style={[Col.$]}>
      <Text style={[styles.tc]}>Col1</Text>
    </View>
    <View style={[Col.$]}>
      <Text style={[styles.tc]}>Col1</Text>
    </View>
    <View style={[Col.$]}>
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
