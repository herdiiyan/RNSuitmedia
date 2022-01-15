import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, RefreshControl, ScrollView, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { url } from '../../../utils/Constants';
import { dataMaps } from '../../../utils/Mock';
import { CHeader, CText } from '../../components';
import Maps from '../../components/maps';
import { styles } from './style';

const User = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [maps, setMaps] = useState(false);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        fetch(url + `api/users?page=${page}&amp;per_page=10`)
            .then((response) => response.json())
            .then((json) => {
                if (json.data == '') {
                    ToastAndroid.showWithGravity(
                        "Data is empty",
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
                }
                setData(data => [...data, ...json.data])
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [page]);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
        setPage(page + 1)
    }, [page]);

    const onMaps = () => {
        if (maps) {
            setMaps(false)
        } else {
            setMaps(true)
        }
    }

    return (
        <>
            <CHeader
                header
                right
                icon={maps ? "list" : "location-pin"}
                rightOnPress={onMaps}
                title="Users"
                onPress={() => {
                    navigation.goBack(null)
                    setData([])
                    setPage(1)
                }}
            />
            <View style={{ flex: 1 }}>
                {isLoading ?
                    <View style={styles.loading}>
                        <CText body="Loading..." />
                    </View> :
                    maps ?
                        <Maps
                            data={{ MAPS: dataMaps, DATA: data }}
                            navigator={navigation}
                        /> :
                        (
                            <View style={styles.container}>
                                <FlatList
                                    data={data}
                                    inverted
                                    keyExtractor={({ id }, index) => id}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{
                                        flexDirection: 'column-reverse',
                                    }}
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={refreshing}
                                            onRefresh={onRefresh}
                                        />
                                    }
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            style={styles.flatList}
                                            onPress={() => navigation.navigate('Home', {
                                                data: {
                                                    code: 0,
                                                    data: item
                                                }
                                            })}>
                                            <View style={styles.image}>
                                                <Image
                                                    source={{
                                                        uri: item.avatar,
                                                    }}
                                                    style={styles.imageUser}
                                                />
                                            </View>

                                            <View style={styles.data}>
                                                <CText
                                                    b500
                                                    body={item.first_name + " " + item.last_name}
                                                    style={styles.name}
                                                />
                                                <CText
                                                    body={item.email}
                                                    style={styles.email}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    )}
                                />
                            </View>
                        )
                }
            </View>
        </>
    );
};

export default User