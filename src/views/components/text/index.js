import React from 'react';
import { View, Text } from 'react-native';

const CText = ({
    children, 
    style, 
    body, 
    bold, 
    b500,
    b600, 
    ...rest
}) => (
    <View>
        <Text style={[style, {fontFamily: bold 
            ? 'Poppins-Bold' : 
            b500 ? 'Poppins-Medium' : 
            b600 ? 'Poppins-SemiBold' : 'Poppins-Regular'}]}>{body}</Text>
        {children}
    </View>
);

export default CText;
