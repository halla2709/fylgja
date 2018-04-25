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
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    flexWrap: 'wrap'
  },

  splitpage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },

  title: {
    fontFamily: 'merriweather-black',
    fontSize: 74
  },

  smallTitle: {
    fontSize: 52
  },

  buttons: {
    width: 350,
    height: 70,
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
    fontSize: 24,
  },

  h1: {
    fontFamily: 'dosis-regular',
    fontSize: 32,
    alignItems: 'center',
    padding: 10,
  },

  h2: {
    fontFamily: 'dosis-bold',
    fontSize: 25,
    paddingBottom: 5,
  },

  p: {
    fontFamily: 'opensans-regular',
    fontSize: 18,
  },

  body: {
    fontFamily: 'opensans-regular',
    fontSize: 18,
  },

  //HomeScreen

  titlecontainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  imagecontainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  buttoncontainer: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  textcontainer: {
    height: '80%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  image: {
    flex: 1,
  },

  //SearchScreen
  searchwholepage: {
    backgroundColor: 'rgb(239,239,239)',
    alignItems: 'center',
    flex: 1,
   }, 
   
   searchtitlecontainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

   search: {
    width: 400,
    padding: 5,
    margin: 10,
    borderColor: 'rgb(128,128,128)',
    borderWidth: 2,
    backgroundColor: 'rgb(255,255,255)',
  
   }, 
   searchtext: {
    color: 'rgb(128,128,128)',
    fontFamily: 'opensans-regular',
    fontSize: 24,
   },
   
   searchcontainer: {
    width:'100%',
    flex: 5,
  }, 

   searchresult: {
    width:'100%',
    alignItems: 'center',
  }, 

  //ReaderScreen
  readerwholepage: {
    backgroundColor: 'rgb(239,239,239)',
    justifyContent: 'space-between',
     },
  
  chaptercontainer: {
      width:'100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
    alignItems: 'center',
    },

    decorationcontainer: {
    alignItems: 'center',
    justifyContent: 'space-around'
    },
    
    subchaptercontainer: {
      width:'100%',
      justifyContent: 'space-around',
      paddingTop: 20,
      paddingBottom: 0,
      paddingHorizontal: 10,
    },

    pcontainer: {
      width:'100%',
      justifyContent: 'space-around',
      overflow: 'scroll',
      paddingHorizontal: 10,
      },

      chaptertext: {
        overflow: 'scroll',
        alignItems: 'center',
        width: '90%',
      },

      leftarrow: {
        width:'5%',
        alignItems: 'flex-start',
      },

      rightarrow: {
        width:'5%',
        alignItems: 'flex-end',
      },

      container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 },


  //InformationScreen
  informationwholepage: {
    backgroundColor: 'rgb(239,239,239)',
    justifyContent: 'space-between',
     },

  informationimage: {
    height: '30%'
  },


  //drawer
  drawer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgb(239,239,239)',//'rgb(250,215,82)', //'rgb(251,199,6)',
    paddingTop: 40,
    paddingHorizontal: 20
  },

  drawerItem: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    padding: 12,
    margin: 5,
    borderRadius: 2,
    borderColor: 'rgb(34,82,171)',
    borderWidth: 1,
    backgroundColor: 'rgb(34,82,171)',
    textAlign: 'center'
  },

  drawerGold: {
    justifyContent: 'flex-end',
    width: '100%',

  },

  drawerGold2: {
    justifyContent: 'flex-end',
    width: '20%',
    height: '20%'

  },
});
