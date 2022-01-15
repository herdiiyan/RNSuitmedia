import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CText } from '..';
import { colors } from '../../../utils/Constants';

const CHeader = ({
    children, style, header, right, title, onPress, rightOnPress, icon, ...rest
}) => (
    <View style={{ paddingTop: 60, paddingBottom: 20, borderBottomWidth: header ? 0.2 : null }}>
        {header ?
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{ flex: 1, marginLeft: 25 }}
                    onPress={onPress}
                >
                    <Icon
                        name="arrow-back-ios"
                        color={colors.primary}
                        style={{ fontSize: 20 }}
                    />
                </TouchableOpacity>
                <CText
                    b600
                    body={title}
                    style={{
                        flex: 1,
                        textAlign: 'center',
                        fontSize: 18,
                        color: colors.primary
                    }}
                />
                <View
                    style={{
                        flex: 1,
                        alignItems: 'flex-end',
                        marginRight: 25
                    }}
                >
                    {right ?
                        <TouchableOpacity onPress={rightOnPress}>
                            <Icon
                                name={icon}
                                color={colors.primary}
                                style={{ fontSize: 26 }}
                            />
                        </TouchableOpacity>
                        : null}
                </View>
            </View> : null}
    </View>
);

export default CHeader;
