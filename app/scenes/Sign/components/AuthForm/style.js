import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },

    textInput: {
        backgroundColor: '#ffffff',
        height: 50,
        margin: 10,
        borderRadius: 5,
        padding: 3,
        borderBottomWidth: 1,
        borderColor: 'gray',
    },

    button: {
        backgroundColor: '#88cc88',
        height: 40,
        margin: 10,
        borderRadius: 5,
        padding: 3,
        alignItems: 'center',
        justifyContent:'center',
        
    },

    buttonTitle: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default styles;