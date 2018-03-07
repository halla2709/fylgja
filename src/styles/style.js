'use strict';

var React = require('react-native');

var myStyles = React.StyleSheet.create({ 
  
  /*Color theme:
  Úr logoinu:
  Aðalblár (34,82,171)
  Gulur rgb(251,199,6),
  Grænn (62,135,60)
  Brúnn (201,52,36)


  Ljósblárri í sama 54,62,201
  Grár bakgrunnur 239,239,239
  */
  
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

  h2: {
    fontFamily: 'dosis-medium',
    fontSize: 25,
  },

  p: {
    fontFamily: 'opensans-regular',
    fontSize: 15,
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
  
  //SearchScreen


module.exports = myStyles;
