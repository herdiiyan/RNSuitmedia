import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { image } from '../../../utils/Constants';
import { CHeader, CText } from '../../components';
import { styles } from './style';

const Home = ({ navigation }) => {
    const route = useRoute();

    const _renderItem = () => {
        return (
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.welcome}>
                    <CText
                        body='Welcome'
                        style={styles.welcomeText}
                    />
                    <CText
                        bold
                        body={route.params.data.code == 1 ? route.params.data.name : route.params.data.data.first_name + ' ' + route.params.data.data.last_name}
                        style={styles.nameText}
                    />
                </View>
                <View style={styles.content}>
                    <Image
                        source={route.params.data.code == 1 ?
                            image.imageUserHome :
                            {
                                uri: route.params.data.data.avatar,
                            }
                        }
                        style={styles.imageUser}
                    />
                    {route.params.data.code == 1 ?
                        <CText
                            b500
                            body="Select a user to show the profile"
                            style={styles.text}
                        />
                        :
                        <>
                            <CText
                                bold
                                body={route.params.data.data.first_name + ' ' + route.params.data.data.last_name}
                                style={styles.textName}
                            />
                            <CText
                                body={route.params.data.data.email}
                                style={styles.textEmail}
                            />
                            <TouchableOpacity onPress={() => navigation.navigate('Webview')}>
                                <CText
                                    body="Website"
                                    style={styles.textWebsite}
                                />
                            </TouchableOpacity>
                        </>
                    }
                </View>
            </ScrollView>
        )
    }
    return (
        <>
            <CHeader header title="Home" onPress={() => navigation.goBack(null)} />
            {_renderItem()}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('User')}
            >
                <CText
                    body="Choose a User"
                    style={styles.textButton}
                />
            </TouchableOpacity>
        </>
    )
};

export default Home;
