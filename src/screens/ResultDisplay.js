import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts, ArchitectsDaughter_400Regular } from '@expo-google-fonts/architects-daughter';
import HeaderImageScrollView, { TriggeringView } from 'react-native-image-header-scroll-view';
import OpenWeather from '../api/OpenWeather';
import DetailsDisplay from '../components/DetailsDisplay';

const ResultDisplay = ( {route} ) => {
    const city = route.params.term
    const [FetchWeather, result, errorMessage] = OpenWeather();

    let [fontLoaded, error] = useFonts({
        ArchitectsDaughter_400Regular
    });

    useEffect(()=>{
        FetchWeather(city)
    },[]);

    return(
        <View style={styles.viewStyle}>
        <HeaderImageScrollView
            showsVerticalScrollIndicator={false}
            maxHeight={200}
            minHeight={0}
            headerImage={require("../../assets/result.png")}
            >
                <View>
                    <TriggeringView>
                        {errorMessage ? <Text style={styles.errormessageStyle}>{errorMessage}</Text> : null}
                        {result ?
                            <View>
                                <Text style={styles.cityStyle}>{city}</Text>
                                <DetailsDisplay 
                                    temperature={result.feels_like}
                                    icon='thermometer'
                                    unit= '&deg;C'
                                    name='Feels Like'
                                />
                                <DetailsDisplay 
                                    temperature={result.temp}
                                    icon='thermometer'
                                    unit= '&deg;C'
                                    name='Temperature'
                                />
                                <DetailsDisplay 
                                    temperature={result.temp_max}
                                    icon='thermometer'
                                    unit= '&deg;C'
                                    name= 'Temperature Max'
                                />
                                <DetailsDisplay 
                                    temperature={result.temp_min}
                                    icon='thermometer'
                                    unit= '&deg;C'
                                    name= 'Temperature Min'
                                />
                                <DetailsDisplay 
                                    temperature={result.humidity}
                                    icon='droplet'
                                    unit= '%'
                                    name= 'Humidity'
                                />
                                <DetailsDisplay 
                                    temperature={result.pressure}
                                    icon='wind'
                                    unit= 'hPa'
                                    name='Pressure'
                                />
                            </View>
                        : null }
                    </TriggeringView>
                </View>
        </HeaderImageScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle:{
        width:400,
        height:250,
        alignSelf:'center',
    },
    viewStyle:{
        flex:1,
        backgroundColor:'#fff',
        paddingTop:20
    },
    cityStyle:{
        alignSelf:'center',
        fontSize:24,
        fontFamily:'ArchitectsDaughter_400Regular',
        padding:20,
        textTransform:'uppercase'

    },
    scrollviewStyle:{
        alignSelf:'center',
        width:150,
        marginVertical:20,
    },
    errormessageStyle:{
        textTransform:'uppercase',
        alignSelf:'center',
        paddingTop:30,
        fontSize:30,
        fontFamily:'ArchitectsDaughter_400Regular',
    }

});

export default ResultDisplay;