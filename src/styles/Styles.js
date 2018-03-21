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
    fontFamily: 'opensans-regular',
    fontSize: 18,
  },

  h1: {
    fontFamily: 'dosis-regular',
    fontSize: 35,
    alignItems: 'center',
  },

  h2: {
    fontFamily: 'dosis-bold',
    fontSize: 20,
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

  image: { 
    width: 280,
    height: 300,
    flex: 2
  },

  //ReaderScreen
  readerwholepage: {
    backgroundColor: 'rgb(239,239,239)',
    justifyContent: 'space-between',
    alignItems: 'center',
   },  
  
  chaptercontainer: {
      width:'100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    
    subchaptercontainer: {
      width:'100%',
      alignItems: 'center',
      justifyContent: 'space-around'
    },

    textcontainer: {
      width:'100%',
      justifyContent: 'space-around'
      },

      leftarrow: {
        width:'5%',
        alignItems: 'flex-start',
      },

      rightarrow: {
        width:'5%',
        alignItems: 'flex-end',
      },
      
      h1arrow: {
        fontFamily: 'dosis-regular',
        fontSize: 35,
        alignItems: 'center',
        width: '90%',
        justifyContent: 'space-between',
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
