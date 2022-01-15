import React, { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { CText } from '..';
import { colors, region } from '../../../utils/Constants';

const { width: WIDTH, height: HIGHT } = Dimensions.get('window')

const Maps = ({
    children, style, data, navigator, ...rest
}) => {
    const [dataUsers, setDataUser] = useState([]);
    const [card, setCard] = useState(false);
    const [dataPick, setPick] = useState('');

    function filterData() {
        data.MAPS.forEach(map => {
            data.DATA.forEach(user => {
                if (user.id == map.id) {
                    setDataUser(dataUsers => [...dataUsers, {
                        id: user.id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        avatar: user.avatar,
                        coordinates: {
                            latitude: map.latitude,
                            longitude: map.longitude
                        }
                    }]);
                }
            });
        });

    }

    function goToProfile(data, navigation) {
        navigation.navigate('Home', {
            data: {
                code: 0,
                data: data
            }
        })
    }

    function markerClick(data) {
        setCard(true)
        setPick(data)
    }

    function onAnnotationPress() {
        setCard(false)
    }

    useEffect(() => {
        filterData()
    }, []);


    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                onPress={() => onAnnotationPress()}
                region={{
                    latitude: dataPick.coordinates ? dataPick.coordinates.latitude : region.latitude,
                    longitude: dataPick.coordinates ? dataPick.coordinates.longitude : region.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
            >
                {dataUsers.map((marker) => (
                    <MapView.Marker
                        key={marker.id}
                        coordinate={marker.coordinates}
                        onPress={() => markerClick(marker)}
                    />
                ))}
            </MapView>
            {card ?
                <View style={styles.card}>
                    <Image
                        source={{
                            uri: dataPick.avatar,
                        }}
                        style={styles.imageUser}
                    />
                    <CText b500 body={dataPick.first_name + ' ' + dataPick.last_name} style={styles.name} />
                    <TouchableOpacity
                        onPress={() => goToProfile(dataPick, navigator)}
                        style={styles.button}
                    >
                        <CText
                            body="Select"
                            style={styles.textButton}
                        />
                    </TouchableOpacity>
                </View>
                : null}
        </View>
    )
};

export default Maps;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    card: {
        backgroundColor: 'white',
        width: WIDTH,
        height: HIGHT / 3,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        elevation: 5,
        alignItems: 'center'
    },
    imageUser: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
        borderRadius: 100,
        marginTop: 20
    },
    name: {
        fontSize: 16,
        marginVertical: 20
    },
    button: {
        marginBottom: 30,
        marginHorizontal: 25,
        width: WIDTH - 50,
        height: 40,
        borderRadius: 12,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: colors.white,
        fontSize: 14
    },
});