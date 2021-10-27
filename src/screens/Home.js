import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images,icons,COLORS, FONTS, SIZES } from '../../constants'

const Home = ({navigation}) => {

    const [newPlants, setNewPlants] = React.useState([
        {
            id:0,
            name:'Plant 1 ',
            img: images.plant1,
            favourite:false
        },
        {
            id:1,
            name:'Plant 2 ',
            img: images.plant2,
            favourite:true
        },
        {
            id:2,
            name:'Plant 3 ',
            img: images.plant3,
            favourite:false
        },
        {
            id:3,
            name:'Plant 4 ',
            img: images.plant4,
            favourite:true
        },
    ])

    function renderNewPlants(item, index){
        return (
            <View style={{alignItems:'center', justifyContent:'center', marginHorizontal:5}}>
                <Image  source={item.img} style={{width:90, height:100,borderRadius:10}}/>
                {/* text */}
                <View style={{position:'absolute', right:0, bottom:10, backgroundColor:COLORS.primary, paddingHorizontal:6, borderTopLeftRadius:10, borderBottomLeftRadius:10}}>
                    <Text style={{color:COLORS.white, ...FONTS.h4}}>{item.name}</Text>
                </View>
                <View  style={{position:'absolute', top:10, left:10}}>
                    <Image source={item.favourite ? icons.heartRed: icons.heartGreenOutline} style={{ width:20, height:20}}/>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/* View Plants */}
            <View style={{height:'30%', backgroundColor:COLORS.white}}>
                <SafeAreaView style={{flex:1, paddingHorizontal:20, paddingTop:20, backgroundColor:COLORS.primary, borderBottomLeftRadius:50, borderBottomRightRadius:50}}>
                    {/* text & image inside green background */}
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text  style={{fontWeight:'bold', color:COLORS.white, ...FONTS.h2}}>New Plant</Text>
                        <Image source={icons.focus}
                        resizeMode="contain"
                        style={{width:25, height:25}}
                        />
                    </View>
                    {/* slides images */}
                    <View style={{marginTop:16}}>
                        <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={newPlants}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({item, index}) => renderNewPlants(item, index)}
                        />
                    </View>
                </SafeAreaView>
            </View>

            {/* Today Share */}
            <View style={{height:'50%',padding:5, backgroundColor:COLORS.white,borderBottomLeftRadius:30,borderBottomRightRadius:30, marginVertical:10}}>
                <TodayShareText />
                <TodayShareImages navigation={navigation}/>
            </View>

            {/* Add Friend */}
            <View style={{height:'20%', backgroundColor:COLORS.lightGray, paddingHorizontal:20, paddingVertical:5}}>
                <View>
                    <Text style={{fontWeight:'bold', color:COLORS.secondary, ...FONTS.h3}}>Added Friends</Text>
                    <Text style={{color:COLORS.secondary, ...FONTS.h3}}>5 Total</Text>
                </View>

                <View style={{flexDirection:'row', height:'60%', padding:10}}>
                    <View style={{flex:1,flexDirection:'row', alignItems:'center', justifyContent:'flex-start'}}>
                        <AddFriendProfilesLeftSide />
                    </View>

                    <View style={{flex:1,flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
                        <Text>Add New</Text>
                        <TouchableOpacity onPress={() => console.log('Add Friend on press')} style={{backgroundColor:COLORS.gray, padding:10,marginLeft:10, borderRadius:10}}>
                            <Image source={icons.plus} style={{width:20, height:20}}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </View>
    )
}


// tody share
const TodayShareText =()=>(
    <View style={{flexDirection:'row' ,paddingHorizontal:20, alignItems:'center', justifyContent:'space-between'}}>
        <Text style={{fontWeight:'bold', ...FONTS.h2, color:COLORS.secondary}}>Today's Share</Text>
        <TouchableOpacity>
            <Text style={{color:COLORS.secondary, ...FONTS.body3}}>See All</Text>
        </TouchableOpacity>
    </View>
)

const TodayShareImages =({navigation})=>(
    <View style={{flexDirection:'row', height:'80%', paddingTop:10, margin:15}}>
       <View style={{flex:1, flexDirection:'column'}}>
           <TouchableOpacity style={{flex:1}} onPress={() => {navigation.navigate('Detail')}}>
           <Image source={images.plant5}
           resizeMode="cover"
           style={{
               width: '100%',
               height: '100%',
               borderRadius:20
           }}
           />
           </TouchableOpacity>
           <TouchableOpacity style={{flex:1, marginTop:10}}>
           <Image source={images.plant6}
           resizeMode="cover"
           style={{
               width: '100%',
               height: '100%',
               borderRadius:20
           }}
           />
           </TouchableOpacity>
       </View>
       <View style={{flex:1.3}}>
       <TouchableOpacity style={{flex:1, marginLeft:30}}>
           <Image source={images.plant7}
           resizeMode="cover"
           style={{
               width: '100%',
               height: '100%',
               borderRadius:20
           }}
           />
           </TouchableOpacity>
       </View>
    </View>
)

// Add Friend List & components

const FriendList = [
    {
        id:1,
        img:images.profile1
    },
    {
        id:2,
        img:images.profile2
    },
    {
        id:3,
        img:images.profile3
    },
    {
        id:4,
        img:images.profile3
    },
    {
        id:5,
        img:images.profile3
    },
]


const AddFriendProfilesLeftSide =()=>(
    <View style={{flexDirection:'row', alignItems:'center'}}>
        {FriendList.map((item, index) =>{
            if(index <= 2){
                return(
                    <TouchableOpacity key={item.id} style={{marginLeft:-13}}>
                        <Image source={item.img}
                        resizeMode="cover"
                        style={{width:40, height:40, borderRadius:100}}
                        />
                    </TouchableOpacity>
                )

            }
        })}
        <Text style={{paddingLeft:4, color:COLORS.secondary}}>+{FriendList.length - 3 } More</Text>
        </View>
)




const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default Home
