import React from 'react'
import { View, Text ,Image,TouchableOpacity} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { images,icons, COLORS, FONTS, SIZES } from '../../constants'

const Detail = ({navigation}) => {

    const RenderBannerImage =()=>(
        <View >
            <Image source={images.bannerBg} style={{width:'100%', height:'100%'}}/>
        </View>
    )
    const BackArrow =(props)=>(
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={{position:'absolute', top:50, left:10, backgroundColor:'rgba(255, 255,255, 0.5)', padding:7, borderRadius:20, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Image source={icons.back} style={{width:23, height:23}}/>
        </TouchableOpacity>
    )

    return (
        <SafeAreaView style={{flex:1}}>
            {/* Banner Photo */}
                <View style={{height:'35%'}}>
                    <RenderBannerImage />
                </View>
            {/* requirements */}
                <View style={{flex:1,marginTop:-45, paddingVertical:20,borderTopLeftRadius:40, borderTopRightRadius:40,backgroundColor:COLORS.lightGray}}>
                    <Text style={{color:COLORS.secondary, fontWeight:'bold', ...FONTS.h2, paddingHorizontal:SIZES.padding}}>Requirements</Text>
                </View>

                {/* renderHeader BackArrow */}
                <BackArrow navigation={navigation}/>
        </SafeAreaView>
    )       
}

export default Detail
