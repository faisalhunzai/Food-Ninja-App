import React from 'react';
import { StyleSheet, Text, View, ImageSourcePropType } from 'react-native';
import {Icon} from '../Components/Icon';
import CustomImage from '../Components/Imagecomponet';

interface CartItemProps {
  item: {
    id: string;
    image: ImageSourcePropType;
    title: string;
    description: string;
    price: string;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <View>
      <CustomImage source={item.image} style={styles.cardimage} />
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.quantityContainer}>
          <Icon.FontAwesome name="minus-square" size={30} color="yellow" />
          <Text style={styles.quantityText}>1</Text>
          <Icon.FontAwesome name="plus-square" size={30} color="yellow" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardimage: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 20,
  },
  card: {
    marginLeft: 200,
    marginTop: -130,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    color: 'black',
    fontSize: 15,
  },
  price: {
    color: 'rgba(255, 189, 0, 0.5)',
    fontWeight: 'bold',
    fontSize: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  quantityText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export default CartItem;
