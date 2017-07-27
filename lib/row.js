import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  //normal:
  $:{
    flexDirection: 'row'
  },
  wrap: {
    flexWrap:'wrap'
  },
  nowrap: {
    flexWrap:'nowrap'
  },

  //alignment:
  top: {
    alignItems:'flex-start'
  },
  center: {
    alignItems:'center'
  },
  bottom: {
    alignItems:'flex-end'
  },
  strench: {
    alignItems: 'stretch'
  },
  baseline: {
    alignItems: 'baseline'
  },

  //justify:
  justifyStart:{
    justifyContent: 'flex-start'
  },
  justifyCenter:{
    justifyContent: 'center'
  },
  justifyEnd:{
    justifyContent: 'flex-end'
  },
  justifyAround:{
    justifyContent: 'space-around'
  },
  justifyBetween:{
    justifyContent: 'space-between'
  }
});
