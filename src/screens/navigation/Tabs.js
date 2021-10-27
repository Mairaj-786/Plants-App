import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Home';


// image & icons
import {icons, COLORS} from '../../../constants/'

const Tab = createBottomTabNavigator();

const tabOptions ={
    showLabel:false,
    style:{
        height:15,
    }
}




const Tabs = () => {
    return (
        <Tab.Navigator
        tabBarOptions={tabOptions}
        screenOptions={({route}) =>({
            tabBarIcon: ({focued}) =>{
                const tintColor = focued ? COLORS.primary:COLORS.gray;

                switch (route.name) {
                    case 'Home':
                        return(
                            <TouchableOpacity>
                                <Image 
                                source={icons.flash}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor:tintColor
                                }}
                                />
                            </TouchableOpacity>
                        )
                    case 'Box':
                        return(
                            <TouchableOpacity>
                                <Image 
                                source={icons.cube}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor:tintColor
                                }}
                                />
                            </TouchableOpacity>
                        )
                    case 'Camera':
                        return <CameraButton />
                    case 'Search':
                        return(
                            <TouchableOpacity>
                                <Image 
                                source={icons.search}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor:tintColor
                                }}
                                />
                            </TouchableOpacity>
                        )
                    case 'Favourite':
                        return(
                            <TouchableOpacity>
                                <Image 
                                source={icons.heart}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor:tintColor
                                }}
                                />
                            </TouchableOpacity>
                        )
                }
            }
        })}
        >
            <Tab.Screen name="Home" options={{headerShown:false}} component={Home} />
            <Tab.Screen name="Box" options={{headerShown:false}} component={Home}/>
            <Tab.Screen name="Camera" options={{headerShown:false}} component={Home}/>
            <Tab.Screen name="Search" options={{headerShown:false}} component={Home}/>
            <Tab.Screen name="Favourite" component={Home} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}



const CameraButton =()=>  (
    <View style={{
        alignItems:'center',
        justifyContent:'center',
        width: 47,
        height: 47,
        backgroundColor:'green',
        borderRadius:100,
    }}>
        <Image source={icons.camera}
        resizeMode="contain"
        style={{
            height: 24,
            width: 24,

        }}
        />
    </View>
)

export default Tabs
