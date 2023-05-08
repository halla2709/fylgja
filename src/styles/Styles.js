import { StyleSheet, PixelRatio } from 'react-native';

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
  appcontainer: {
    flex: 1
  },
  
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
    fontSize: 74/PixelRatio.getFontScale()
  },

  smallTitle: {
    fontSize: 52/PixelRatio.getFontScale()
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
    color: 'black',
    fontFamily: 'opensans-regular',
    fontSize: 24/PixelRatio.getFontScale(),
  },

  h1: {
    fontFamily: 'merriweather-regular',
    fontSize: 25/PixelRatio.getFontScale(),
    alignSelf: 'center',
    padding: 25,
  },

  h1reader: {
    fontFamily: 'merriweather-regular',
    fontSize: 22/PixelRatio.getFontScale(),
    alignSelf: 'center',
    alignContent: 'center',
    textAlign: 'center',
    padding: 10,
    overflow: 'hidden',
    color: 'rgb(34,82,171)',
  },

  searchh1: {
    fontFamily: 'merriweather-regular',
    fontSize: 22/PixelRatio.getFontScale(),
    padding: 10,
    opacity: 1,
  },

  h2: {
    fontFamily: 'merriweather-bold',
    fontSize: 18/PixelRatio.getFontScale(),
    paddingTop: 3,
    
  },

  h2subchapter: {
    fontFamily: 'merriweather-bold',
    fontSize: 20/PixelRatio.getFontScale(),
    paddingTop: 3,
    
  },

  searchh2: {
    fontFamily: 'merriweather-light',
    fontSize: 18/PixelRatio.getFontScale(),
    paddingLeft: 35,
  },

  h22: {
    fontFamily: 'dosis-medium',
    fontSize: 25/PixelRatio.getFontScale(),
    paddingBottom: 5,
    alignItems: 'flex-start',
  },

  h2informationplus: {
    fontFamily: 'merriweather-regular',
    fontSize: 22/PixelRatio.getFontScale(),
    paddingBottom: 5,
    
  },

  h2informationminus: {
    fontFamily: 'merriweather-regular',
    fontSize: 22/PixelRatio.getFontScale(),
    paddingBottom: 5,
    color: 'rgb(34,82,171)',

  },

  TextShadowStyle:
  {
     textAlign: 'center',
     fontSize: 30/PixelRatio.getFontScale(),
     textShadowColor: '#E91E63',
     textShadowOffset: { width: 1, height: 4 },
     textShadowRadius: 5
  },

  p: {
    fontFamily: 'opensans-regular',
    fontSize: 18/PixelRatio.getFontScale(),
  },

  pItalic: {
    fontFamily: 'opensans-italic',
    fontSize: 18/PixelRatio.getFontScale(),
  },

  ptiny: {
    fontFamily: 'opensans-regular',
    fontSize: 14/PixelRatio.getFontScale(),
    color: 'rgb(138,138,138)',
    alignSelf: "center",
    marginTop: 2
  },

  h1Information: {
    fontFamily: 'opensans-regular',
    fontSize: 24/PixelRatio.getFontScale(),
  },

  searchedtext: {
    fontFamily: 'opensans-regular',
    fontSize: 15/PixelRatio.getFontScale(),
    paddingLeft: 15,
    color: '#696969',
  },

  pBold: {
    fontFamily: 'opensans-bold',
    fontSize: 18/PixelRatio.getFontScale(),
  },
  
  pSubchapterBold: {
    fontFamily: 'opensans-semibold',
    fontSize: 18/PixelRatio.getFontScale(),
  },

  pBoldCenter: {
    fontFamily: 'opensans-bold',
    fontSize: 18/PixelRatio.getFontScale(),
    textAlign: 'center'
  },

  pBoldCenterU: {
    fontFamily: 'opensans-bold',
    fontSize: 18/PixelRatio.getFontScale(),
    textAlign: 'center',
    textDecorationLine: 'underline'
  },

  pA: {
    fontSize: 18/PixelRatio.getFontScale(),
    color: 'rgb(34,82,171)', 
    fontWeight: 'bold', 
    textDecorationLine: 'underline'
  },

  pImportant: {
    fontFamily: 'opensans-regular',
    fontSize: 18/PixelRatio.getFontScale(),
    color:'rgb(131,27,0)'
  },

  body: {
    fontFamily: 'opensans-regular',
    fontSize: 18/PixelRatio.getFontScale(),
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
    },

  
  icon1: {
    color: '#FF3A0D',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2,
  },

  icon2: {
    fontSize: 400/PixelRatio.getFontScale(),
    color: '#1500FF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  },

  icon3: {
    color: '#0CE832',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 2
  },

  button1:{
    width: "95%",
    height: "33%",
    justifyContent: 'center',
    padding: 10,

  },

  button2:{
    width: "95%",
    height: "33%",
    justifyContent: 'center',
    padding: 10,
    borderTopColor: '#C0C0C0',
    borderTopWidth: 0.8,
  
  },
  button3:{
    width: "95%",
    height: "33%",
    padding: 10,
    borderTopWidth: 0.8, 
    borderTopColor: '#C0C0C0',
    justifyContent: 'center',
    alignItems: 'center',

  },

  buttontitle1:{
    textAlign: 'center',
    fontFamily: 'opensans-semibold',
    color: 'rgb(201,52,36)',
    fontSize: 32/PixelRatio.getFontScale(),
  },

  buttontext1:{
    color: '#666F7F',
    fontSize: 12/PixelRatio.getFontScale(),
    textAlign: 'center',
  },

  buttontitle2:{
    textAlign: 'center',
    fontFamily: 'opensans-semibold',
    color: 'rgb(34,82,171)',
    fontSize: 32/PixelRatio.getFontScale(),
  },

  buttontext2:{
    color: '#666F7F',
    fontSize: 12/PixelRatio.getFontScale(),
    textAlign: 'center',
  },

  buttontitle3:{
    fontFamily: 'opensans-semibold',
    color: 'rgb(62,135,60)',
    fontSize: 32/PixelRatio.getFontScale(),
    textAlign: 'center',
  },

  buttontext3:{
    color: '#666F7F',
    fontSize: 12/PixelRatio.getFontScale(),
    textAlign: 'center',
  },

  buttoncontainer: {
    flex: 4,
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(255,255,255)'
  },

  imagetext: {
    fontFamily: 'opensans-regular',
    fontSize: 18/PixelRatio.getFontScale(),
    color: 'black',
  },

  textcontainer: {
    height: '80%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  image: {
    flex: 1,
    justifyContent:'center',
  },


  //NewsFeedScreen
  dateText: {
    fontFamily: 'opensans-bold',
    fontSize: 14/PixelRatio.getFontScale(),
    color: 'rgb(131,27,0)',
    textAlign: 'right',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },

  dateText2: {
    fontFamily: 'opensans-bold',
    fontSize: 14/PixelRatio.getFontScale(),
    color: 'rgb(34,82,171)',
    textAlign: 'right',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },


  //SearchScreen
  searchwholepage: {
    backgroundColor: 'rgb(239,239,239)',
    alignItems: 'center',
    flex: 8,
    height: '100%'
  },

  searchTitle: {
    fontFamily: 'merriweather-black',
    fontSize: 40/PixelRatio.getFontScale()

  },

  searchtitlecontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  input: {
    width: 350,
    padding: 5,
    margin: 10,
    borderColor: 'rgb(128,128,128)',
    borderWidth: 2,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 10

  },
  searchtext: {
    color: 'rgb(128,128,128)',
    fontFamily: 'opensans-regular',
    fontSize: 24/PixelRatio.getFontScale(),
  },

  searchcontainer: {
    width: '100%',
    alignItems: 'center',
    flex: 7,
  },

  searchresult: {
    width: '100%',
    backgroundColor: 'rgb(249,249,249)',
    borderRadius: 10,
    opacity: 0.7,

  },

  //ReaderScreen

    readerImage: {
      flex:1, 
      height: undefined, 
      width: undefined,
      alignSelf:'center'
    },

    readerwholepage: {
      //backgroundColor: 'rgb(239,239,239)',
      justifyContent: 'space-between',
    },
  
    chaptercontainer: {
      width: '100%',
      justifyContent: 'space-around',
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    decorationcontainer: {
      alignItems: 'center',
    },
  
    readerdecoration: {
      height: 25,
    },
  
    subchaptercontainer: {
      width: '100%',
      justifyContent: 'space-around',
      paddingTop: 10,
      paddingBottom: 1,
      paddingHorizontal: 5,
    },

    elementcontainer: {
      width: '100%',
      justifyContent: 'space-around',
      paddingTop: 3,
      paddingBottom: 3
    },
  
    pcontainer: {
      width: '100%',
      paddingHorizontal: 10,
    },
  
    chaptertext: {
      overflow: 'scroll',
      alignItems: 'center',
      flex: 8,
    },
  
    leftarrow: {
      flex: 1,
      alignItems: 'center'
    },
  
    rightarrow: {
      flex: 1,
      alignItems: 'center'
    },
  
    container: { 
      flex: 1, 
      padding: 16, 
      paddingTop: 30, 
      backgroundColor: '#fff' },

    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 },  


  //InformationScreen
  informationwholepage: {
    backgroundColor: 'rgb(249,249,249)',
    flex: 1,
     },

  informationimage: {
    height: '30%',
  },

  informationcontainer: {   
    backgroundColor: 'rgb(218,232,245)',
    borderRadius: 10,
    opacity: 0.6,
    width: '100%',
    overflow: 'scroll',
    paddingHorizontal: 10,
    flex: 2,
  },

  plusbutton: {
    color: 'rgb(34,82,171)',
    flex: 1,
    
  },

  minusbutton: {
    color: 'rgb(34,82,171)',
    flex: 1,
  },

  info1: {
    flexBasis: '90%',
  },

  info2: {
    flexBasis: '10%',
  },
  
  infosubchaptercontainerplus: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 0,
    paddingHorizontal: 10, 
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'rgb(34,82,171)',
    justifyContent: 'space-between',
  },

  infosubchaptercontainerminus: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 0,
    paddingHorizontal: 10,
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  //drawer
  drawer: {
    flex: 1,
    backgroundColor: 'rgb(252, 252, 252)',
    justifyContent: 'space-between',
  },

  drawerLogo: {
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderColor: '#d8d8d8',
    minHeight: 85,
  },

  drawerImage: {
    flex: 1,
    resizeMode: 'contain', // or 'stretch'
    height: '92%',
    width: '92%',
    alignSelf: 'center',
  },

  drawerLogoText: {
    flex: 2,
    flexDirection: "column",
    alignSelf: 'center',
  },

  ljosmaedrafelagInfo1: {
    fontFamily: 'merriweather-black',
    fontSize: 18/PixelRatio.getFontScale(),
    paddingTop: 5,
    paddingRight: 10,
    color: 'rgb(34,82,171)',
    alignSelf: 'center',
  },

  ljosmaedrafelagInfo2: {
    fontFamily: 'merriweather-black',
    fontSize: 18/PixelRatio.getFontScale(),
    paddingBottom: 5,
    paddingRight: 10,
    color: 'rgb(34,82,171)',
    alignSelf: 'center',
  },

  drawerChapters:{
    paddingHorizontal: 6,
    backgroundColor: 'rgb(239,239,239)',
    height: '100%',
    borderBottomWidth: 1.5,
    borderColor: '#d8d8d8',
    },

  drawerButtons: {
    justifyContent: 'flex-end',
  },

backgroundImage: {
    flex: 1,
    opacity: 0.4,
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    
  },

  drawerItem1: {
    fontFamily: 'opensans-semibold',
    fontSize: 18/PixelRatio.getFontScale(),
    padding: 6,
    margin: 4,
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: 'rgb(201,52,36)',
    borderWidth: 1,
    color: 'rgb(201,52,36)',
    opacity: 0.85,
    borderRadius: 10,
  },

  drawerItem2: {
    fontFamily: 'opensans-semibold',
    fontSize: 18/PixelRatio.getFontScale(),
    padding: 6,
    margin: 4,
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: 'rgb(34,82,171)',
    borderWidth: 1,
    color: 'rgb(34,82,171)',
    opacity: 0.85,
    borderRadius: 10,
  },

  drawerItem3: {
    fontFamily: 'opensans-semibold',
    fontSize: 18/PixelRatio.getFontScale(),
    padding: 6,
    margin: 4,
    textAlign: 'center',
    backgroundColor: 'white',
    borderColor: 'rgb(62,135,60)',
    borderWidth: 1,
    color: 'rgb(62,135,60)',
    opacity: 0.85,
    borderRadius: 10,
  },

  columnItem: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'column',
    width: '100%'
  },

  // login
  loginContainer: {
    flex: 3,
    alignItems: 'center'
  },
  textInput: {
    flex:1

  },
  wrongpw: {
    alignItems: 'center',
    color: 'rgb(255, 0, 0)',
    fontSize: 20/PixelRatio.getFontScale()


  }
});
