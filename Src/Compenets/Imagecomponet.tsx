import React from 'react';
import { Image, ImageProps, StyleProp, ImageStyle ,Text } from 'react-native';

interface CustomImageProps extends ImageProps {
    source: any;
    style?: StyleProp<ImageStyle>;
}

const CustomImage: React.FC<CustomImageProps> = ({ source, style, ...rest }) => {
    return (
        <Image source={source} style={style} {...rest} />
    );
};

export default CustomImage;
