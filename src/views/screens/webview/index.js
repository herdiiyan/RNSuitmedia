import React from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';
import { CHeader } from '../../components';

const Webview = ({ navigation }) => (
    <>
        <CHeader header onPress={() => navigation.goBack(null)} />
        <WebView
            source={{ uri: 'https://suitmedia.com/' }}
            style={{ marginHorizontal: 15 }}
        />
    </>
);

export default Webview;
