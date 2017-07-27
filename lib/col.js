import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  //base:
  $:{
    width: '100%',
    flex: 1
  },

  //alignment:
  top: {
    alignSelf:'flex-start'
  },
  center: {
    alignSelf:'center'
  },
  bottom: {
    alignSelf: 'flex-end'
  },
  stretch: {
    alignSelf: 'stretch'
  },
  baseline: {
    alignSelf: 'baseline'
  },

  //span:
  span10:{
    flexBasis:'0 0 10%'
  },
  span20:{
    flexBasis:'0 0 20%'
  },
  span30:{
    flexBasis:'0 0 30%'
  },
  span33:{
    flexBasis:'0 0 33.3333%'
  },
  span40:{
    flexBasis:'0 0 40%'
  },
  span50:{
    flexBasis:'0 0 50%'
  },
  span60:{
    flexBasis:'0 0 60%'
  },
  span66:{
    flexBasis:'0 0 66.6666%'
  },
  span70:{
    flexBasis:'0 0 70%'
  },
  span75:{
    flexBasis:'0 0 75%'
  },
  span80:{
    flexBasis:'0 0 80%'
  },
  span90:{
    flexBasis:'0 0 90%'
  },

  //offset:
  offset10: {
    marginLeft:'10%'
  },
  offset20: {
    marginLeft:'20%'
  },
  offset30: {
    marginLeft:'30%'
  },
  offset33: {
    marginLeft:'33.3333%'
  },
  offset40: {
    marginLeft:'40%'
  },
  offset50: {
    marginLeft:'50%'
  },
  offset60: {
    marginLeft:'60%'
  },
  offset66: {
    marginLeft:'66.6666%'
  },
  offset70: {
    marginLeft:'70%'
  },
  offset75: {
    marginLeft:'75%'
  },
  offset80: {
    marginLeft:'80%'
  },
  offset90: {
    marginLeft:'90%'
  }
});
