import { StyleSheet } from 'react-native';
import styles from './../styles/Styles';

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
   flexDirection: 'column',
   justifyContent: 'space-between',
   alignItems: 'center',
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
    borderColor: 'rgb(34,82,171)',
    borderWidth: 2,
    margin: 3,
    backgroundColor: 'rgb(34,82,171)',
  },

  buttontext: {
    color: 'rgb(255,255,255)',
    fontFamily: 'dosis-medium',
    fontSize: 18,
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

 titlecontainer: {
  height:'20%', 
  width:'100%',
  alignItems: 'center',
  justifyContent: 'space-around'
 },
 
 imagecontainer: {
  height:'80%', 
  width:'100%',
  alignItems: 'center',
  justifyContent: 'space-around'
  },

  textcontainer: {
  height:'80%', 
  width:'100%',
  alignItems: 'center',
  justifyContent: 'space-around'
  },

  image: { 
    width: 280,
    height: 300,
    flex: 2
  },

  //SearchScreen

  contentContainer: {
    paddingVertical: 20
  },

  //drawer
  drawer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(74,135,247)',
    paddingTop: 40,
    paddingHorizontal: 20
  },

  drawerItem: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgb(251,199,6)',
    padding: 12,
    margin: 5,
    borderRadius: 2,
    borderColor: 'rgb(251,199,6)',
    borderWidth: 1,
    textAlign: 'center'
  }
});
