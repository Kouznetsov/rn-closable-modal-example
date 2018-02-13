import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text
} from 'react-native';
import ClosableModal from "rn-closable-modal"

export default class App extends Component<Props> {

    state = {showModal: false};

    _onModalClosed = () => {
        this.setState({showModal: false})
    };

    _renderContent = () => {
        return (
            <View style={styles.modal}>
                <Text style={styles.text}>Modal Content</Text>
                <View style={styles.content}/>
            </View>
        );
    };

    render() {
        return (
            <View style={styles.container}>
                <ClosableModal show={this.state.showModal}
                               onClose={this._onModalClosed}
                               overlayColor={"rgba(0,0,0,0.5)"}
                               renderModalContent={this._renderContent}/>
                <View style={{alignSelf: "center"}}>
                    <Button
                        style={styles.button}
                        onPress={() => this.setState({showModal: true})}
                        title="Open modal"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "#00BCD4",
        width: 200,
        height: 400
    },
    text: {
        padding: 20,
        flex: 1,
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
        fontSize: 20,
        color: "black",
        backgroundColor: "white"
    },
    content: {
        flex: 10
    },

    container: {
        flex: 1,
        justifyContent: "center"
    }
});