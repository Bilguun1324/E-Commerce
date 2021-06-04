import React, { useState } from 'react';
import { SuperView, SuperInput, SuperText, SuperStack, Colors, Button, SuperImage } from '../components';
import { useDoc } from '../hooks/firebase';
import { launchImageLibrary } from 'react-native-image-picker';
import { PERMISSIONS, request, check } from 'react-native-permissions';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import storage from '@react-native-firebase/storage';

export const CreateScreen = () => {
    const uid = uuid.v4()
    const { updateDoc } = useDoc(`products/${uid}`);
    const navigation = useNavigation();
    const [productname, setProductname] = useState('');
    const [productprice, setProductprice] = useState('');
    const [productUrl, setProductUrl] = useState('https://blackmantkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg');

    const ImageLibraryOptions: any = { maxWidth: 500, maxHeight: 500 };
    const chooseImage = async () => {
        await check(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
            return result !== 'granted'
                ? request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((photoLibraryresponse) => console.log('photoLibraryPermission: ' + photoLibraryresponse)) : console.log('granted');
        });
        await launchImageLibrary(ImageLibraryOptions, async (img: any) => {
            setProductUrl(img.assets[0].uri)
        });
    }

    const deployProduct = async () => {
        const ref = storage().ref(`products/${uid}`);
        await ref.putFile(productUrl);
        updateDoc({ productname, productprice })
        navigation.navigate('SuccessScreen', { text: 'your product has been successfully deployed!!!' })
        setProductprice('')
        setProductname('')
        setProductUrl('https://blackmantkd.com/wp-content/uploads/2017/04/default-image-620x600.jpg')
    }

    return (
        <SuperView height='100%' width='100%'>
            <SuperStack space={20} width={327}>
                <SuperText color={Colors['orange']} textAlign='left' width='100%'>Product name: </SuperText>
                <SuperInput onChange={setProductname} backgroundColor={Colors['orange']} color={Colors['white']} value={productname} />
                <SuperText color={Colors['orange']} textAlign='left' width='100%'>Product price:  </SuperText>
                <SuperInput onChange={setProductprice} backgroundColor={Colors['orange']} keyboardType='numeric' color={Colors['white']} value={productprice} />
                <Button word='Tap here to upload product image' onPress={chooseImage} />
                <SuperImage source={{ uri: productUrl }} height={300} width='100%' radius={10} overflow='hidden' />
                <Button word='Ready to deploy your product?' onPress={deployProduct} />
            </SuperStack>
        </SuperView>
    )
}