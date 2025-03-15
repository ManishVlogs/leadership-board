import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View style={style.Container} >
      <View style={style.topContainer}>
        <Text style={style.HeaderTitle}>Leader Board</Text>
        <View style={style.mainCardContainer}>
          {TopRankerData.map((item, index) => {
            return (
              <View key={index} style={[style.mainCard, item.rank !== 1 && { marginTop: 20 }]}>
                <Image source={{ uri: item.imageUrl }} style={style.mainCardImage} resizeMode="cover" />
                <Text style={style.mainCardTitle}>{item.name}</Text>
                <View style={style.mainCardRankContainer}>
                  <Text style={style.mainCardRankContainerTitle}>{item.rank}</Text>
                </View>
              </View>
            );
          })}
        </View>


      </View>
      <FlatList data={ListData} renderItem={({ item, index }) => {
        return <View style={style.card}>
          <View style={style.cardDataContainer}>
            <Text style={style.cardIndex}>{index + 1}</Text>
            <Image source={{ uri: item?.imageUrl }} style={style.cardImage} resizeMode='cover' />
            <Text>{item.name}</Text>

          </View>
          <View style={style.cardRankContainer}>
            <Text style={style.cardRankTitle}>{item.score}</Text>
          </View>

        </View>
      }} />
    </View>
  )
}

export default Index



const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#272c35",
  },
  topContainer: {
    backgroundColor: "#1A1F25",
    paddingTop: 30,
    padding: 20,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    gap: 20,
    paddingBottom: 50
  },
  HeaderTitle: {
    textAlign: "center",
    color: "white",
    fontSize: 21,
    fontWeight: "bold"
  },


  mainCardContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center"
  },
  mainCard: {
    backgroundColor: "#272c35",
    padding: 20,
    alignItems: "center",
    borderRadius: 20,
    gap: 50,
    // height:175
  },
  mainCardImage: {
    width: 70,
    height: 90,
    borderRadius: 20,
  },
  mainCardTitle: {
    color: "white",
    fontSize: 17,
    fontWeight: "600"
  },
  mainCardRankContainer: {
    backgroundColor: "orange",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    position: "absolute",
    bottom: -15
  },
  mainCardRankContainerTitle: {
    color: "white"
  },
  card: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  cardIndex: {
    color: "white"
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginLeft: 10,
  },
  cardTitle: {
    color: "white",
    fontSize: 17
  },

  cardRankContainer: {

  },
  cardRankTitle: {
    color: "orange"
  }

})



const ListData = [
  { score: 95, name: "Ritesh", imageUrl: "https://picsum.photos/200?random=1" },
  { score: 88, name: "Aarav", imageUrl: "https://picsum.photos/200?random=2" },
  { score: 76, name: "Priya", imageUrl: "https://picsum.photos/200?random=3" },
  { score: 90, name: "Neha", imageUrl: "https://picsum.photos/200?random=4" },
  { score: 85, name: "Kabir", imageUrl: "https://picsum.photos/200?random=5" },
  { score: 92, name: "Sanya", imageUrl: "https://picsum.photos/200?random=6" },
  { score: 80, name: "Rahul", imageUrl: "https://picsum.photos/200?random=7" },
  { score: 78, name: "Aditi", imageUrl: "https://picsum.photos/200?random=8" },
  { score: 87, name: "Manish", imageUrl: "https://picsum.photos/200?random=9" },
  { score: 93, name: "Swati", imageUrl: "https://picsum.photos/200?random=10" },
  { score: 89, name: "Ankur", imageUrl: "https://picsum.photos/200?random=11" },
  { score: 94, name: "Ishita", imageUrl: "https://picsum.photos/200?random=12" },
  { score: 77, name: "Rohan", imageUrl: "https://picsum.photos/200?random=13" },
  { score: 82, name: "Kavya", imageUrl: "https://picsum.photos/200?random=14" },
  { score: 75, name: "Ramesh", imageUrl: "https://picsum.photos/200?random=15" },
  { score: 96, name: "Suresh", imageUrl: "https://picsum.photos/200?random=16" },
  { score: 81, name: "Harshit", imageUrl: "https://picsum.photos/200?random=17" },
  { score: 97, name: "Simran", imageUrl: "https://picsum.photos/200?random=18" },
  { score: 86, name: "Vikram", imageUrl: "https://picsum.photos/200?random=19" },
  { score: 79, name: "Tanya", imageUrl: "https://picsum.photos/200?random=20" },
  { score: 99, name: "Raj", imageUrl: "https://picsum.photos/200?random=21" },
  { score: 83, name: "Nisha", imageUrl: "https://picsum.photos/200?random=22" },
  { score: 91, name: "Deepak", imageUrl: "https://picsum.photos/200?random=23" },
  { score: 74, name: "Sahil", imageUrl: "https://picsum.photos/200?random=24" },
  { score: 98, name: "Pooja", imageUrl: "https://picsum.photos/200?random=25" },
  { score: 100, name: "Ravi", imageUrl: "https://picsum.photos/200?random=26" },
  { score: 84, name: "Megha", imageUrl: "https://picsum.photos/200?random=27" },
  { score: 89, name: "Aditya", imageUrl: "https://picsum.photos/200?random=28" },
  { score: 87, name: "Sunita", imageUrl: "https://picsum.photos/200?random=29" },
  { score: 78, name: "Prakash", imageUrl: "https://picsum.photos/200?random=30" },
  { score: 85, name: "Jatin", imageUrl: "https://picsum.photos/200?random=31" },
  { score: 92, name: "Ananya", imageUrl: "https://picsum.photos/200?random=32" },
  { score: 90, name: "Veena", imageUrl: "https://picsum.photos/200?random=33" },
  { score: 81, name: "Lakshmi", imageUrl: "https://picsum.photos/200?random=34" },
  { score: 95, name: "Kiran", imageUrl: "https://picsum.photos/200?random=35" },
  { score: 80, name: "Arjun", imageUrl: "https://picsum.photos/200?random=36" },
  { score: 79, name: "Bhavna", imageUrl: "https://picsum.photos/200?random=37" },
  { score: 93, name: "Dinesh", imageUrl: "https://picsum.photos/200?random=38" },
  { score: 88, name: "Suman", imageUrl: "https://picsum.photos/200?random=39" },
  { score: 86, name: "Rajesh", imageUrl: "https://picsum.photos/200?random=40" },
  { score: 75, name: "Ayesha", imageUrl: "https://picsum.photos/200?random=41" },
  { score: 96, name: "Himanshu", imageUrl: "https://picsum.photos/200?random=42" },
  { score: 100, name: "Geeta", imageUrl: "https://picsum.photos/200?random=43" },
  { score: 82, name: "Chetan", imageUrl: "https://picsum.photos/200?random=44" },
  { score: 99, name: "Alok", imageUrl: "https://picsum.photos/200?random=45" },
  { score: 91, name: "Namita", imageUrl: "https://picsum.photos/200?random=46" },
  { score: 77, name: "Gautam", imageUrl: "https://picsum.photos/200?random=47" },
  { score: 94, name: "Usha", imageUrl: "https://picsum.photos/200?random=48" },
  { score: 98, name: "Naveen", imageUrl: "https://picsum.photos/200?random=49" },
  { score: 83, name: "Preeti", imageUrl: "https://picsum.photos/200?random=50" }
];


const TopRankerData = [
  { rank: 2, name: "Douglas", imageUrl: "https://picsum.photos/200?random=101" },
  { rank: 1, name: "John", imageUrl: "https://picsum.photos/200?random=102" },
  { rank: 3, name: "Brian", imageUrl: "https://picsum.photos/200?random=104" },
]