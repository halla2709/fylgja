'use strict';

var React = require('react-native');

var myStyles = React.StyleSheet.create({ 
  
  //for all pages
  wholepage: {
    backgroundColor: 'rgb(239,239,239)',
  },

  title: {
    fontFamily: 'merriweather-black',
    fontSize: 50,
  },
  
  buttons: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
  },

  h1: {
    fontFamily: 'dosis-medium',
    fontSize: 25,
  },

  body: {
    fontFamily: 'opensans-regular',
    fontSize: 18,
  },

 //HomeScreen

  imagecontainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1
  },

  image: { 
    width: 250,
    height: 250
  },

  textcontainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 2
  },
})
  
  


module.exports = myStyles;
