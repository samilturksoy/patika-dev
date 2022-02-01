import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './product.style'

const Product = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: product.imgURL }} resizeMode='contain' />
            <View>
                <Text style={styles.title}>{product.title}</Text>
                <Text>{product.price}</Text>
                {!product.inStock &&
                    <View>
                        <Text style={styles.inStockTitle}>STOKTA YOK</Text>
                    </View>
                }
            </View>
        </View>
    );
}

export default Product