import React from 'react';
import {Image, Text, View, StyleSheet, ScrollView, TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function ImgList({imgType, data}) {
  return {
    small: <SmallImgList data={data} />,
    medium: <MediumImgList data={data} />,
  }[imgType];
}

// 가로스크롤
function SmallImgList({data}){
  return(
    <View style={styles.wrapper}>
      {data.slice(0, 8).map((value, idx) => ( 
        <View key={idx} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <TouchableHighlight>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image source={{uri: 'https://picsum.photos/60/60'}} style={styles.smallImg}/>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.title}>{value.title}</Text>
                <Text style={styles.artist}>{value.artist}</Text>
              </View>
            </View>
          </TouchableHighlight>
          <View style={{paddingTop: 10}}>
            <Icon name={'more-vert'} size={20} color="#fff" />
          </View>
        </View>
      ))}
    </View>
  )
}

function MediumImgList({data}){
  return(
    <View style={styles.wrapper}>
      <View  style={{alignItems: 'flex-start', flexDirection: 'row'}}>
        <ScrollView horizontal={true} style={{marginHorizontal: -20,  paddingHorizontal: 20}}>
      {data.map((value, idx) => ( 
        <View key={idx}>
          <Image source={{uri: 'https://picsum.photos/60/60'}} style={styles.mediumImg}/>
          <Text style={{...styles.title, width: 90}} numberOfLines={2}>{value.title}</Text>
        </View>
      ))}
        </ScrollView>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  wrapper:{
    marginVertical: 20, 
  }, 
  // SmallImgList
  smallImg:{
    height: 50,
    width: 50,
    borderRadius: 3, 
    marginVertical: 6, 
    marginRight: 14, 
  },
  title:{
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 12, 
  },
  artist:{
    marginTop: 4, 
    color: 'white', 
    fontSize: 11, 
  },
  // MediumImgList
  mediumImg:{
    height: 90,
    width: 90,
    borderRadius: 4, 
    marginRight: 14, 
    marginBottom: 10, 
  },
})