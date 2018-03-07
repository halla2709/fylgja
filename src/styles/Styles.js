import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  
  /*Color theme:
  Úr logoinu:
  Aðalblár rgb(34,82,171),
  Gulur rgb(251,199,6),
  Grænn rgb(62,135,60),
  Brúnn rgb(201,52,36),

  Gott að vita:
  Grár bakgrunnur rgb(239,239,239),
  Hvítur rgb(255,255,255),
  Svartur rgb(0,0,0),
  */
  
  //for all pages
  wholepage: {
   backgroundColor: 'rgb(239,239,239)',
  },

  title: {
    fontFamily: 'merriweather-black',
    fontSize: 60,

  },
  
  buttons: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    margin: 3,
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
   
  },

  image: { 
    width: 250,
    height: 300,
    
    
  },

  textcontainer: {
    alignItems: 'center',
    justifyContent: 'space-between',

  },
})
  
  //SearchScreen


