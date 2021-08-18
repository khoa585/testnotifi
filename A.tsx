import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
    IronSource,
    IronSourceSegment,
    IronSourceRewardedVideo,
    IronSourceInterstitials,
    IronSourceOfferwall,
    IronSourceBanner,
} from '@wowmaking/react-native-iron-source';

const segment = new IronSourceSegment();

const A = () => {

    let [count, setcount] = React.useState(0)




    let showInterstitial = () => {

        const onClose = () => IronSourceInterstitials.removeAllListeners();

        IronSourceInterstitials.addEventListener('interstitialDidLoad', () => {

            IronSourceInterstitials.showInterstitial();
        });
        IronSourceInterstitials.addEventListener('interstitialDidFailToLoadWithError', (err) => {
            console.warn('Failed to load inter', err);
            onClose();
        });
        IronSourceInterstitials.addEventListener('interstitialDidFailToShowWithError', (err) => {
            console.warn('Failed to show inter', err);
            onClose();
        });
        IronSourceInterstitials.addEventListener('interstitialDidClose', () => {
            onClose();
        });

        IronSourceInterstitials.loadInterstitial();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showInterstitial}>
                <Text style={styles.button}>Show Interstitial</Text>
            </TouchableOpacity>
        </View>
    );
}
export default A
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        alignSelf: 'center',
        fontSize: 21,
        backgroundColor: '#face8d',
        margin: 7,
    },
    bannerContainer: {
        borderColor: 'red',
        borderWidth: 1,
        width: '90%',
    },
    banner: {
        borderWidth: 1,
        height: 150,
    },
});