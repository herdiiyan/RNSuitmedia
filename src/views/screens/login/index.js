import React, { useState } from 'react';
import { Image, ImageBackground, Text, TextInput, ToastAndroid, TouchableOpacity } from 'react-native';
import { image } from '../../../utils/Constants';
import { CText } from '../../components';
import { styles } from './style';


const Login = ({navigation}) => {
    const [name, onChangeName] = useState('');
    const [palindrome, onChangePalindrome] = useState('');

    const checkPalindrome = (value) => {
        if (value !== '' && value == value.split('').reverse().join('')) {
            return ToastAndroid.showWithGravity(
                "isPalindrome",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        } else if (!value) {
            return ToastAndroid.showWithGravity(
                "empty input palindrome",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        } else {
            return ToastAndroid.showWithGravity(
                "not palindrome",
                ToastAndroid.SHORT,
                ToastAndroid.CENTER
            );
        }
    }

    return (
        <ImageBackground
            source={image.imageBackground}
            style={styles.container}
        >
            <Image
                source={image.imageUser}
                style={styles.imageUser}
            />
            <TextInput
                style={styles.input}
                placeholder='Name'
                onChangeText={onChangeName}
                value={name}
            />
            <TextInput
                style={styles.input}
                placeholder='Palindrome'
                onChangeText={onChangePalindrome}
                value={palindrome}
            />
            <TouchableOpacity
                style={[styles.button, { marginTop: 50 }]}
                onPress={() => checkPalindrome(palindrome)}
            >
                <CText body='CHECK' style={styles.textButton}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home', {data: {
                    code: 1,
                    name: name
                }})}
            >
                <CText body='NEXT' style={styles.textButton}/>
            </TouchableOpacity>
        </ImageBackground>
    )
}

export default Login;
