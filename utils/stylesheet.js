import { StyleSheet } from 'react-native'

export const purple = '#292477'
export const gray = '#757575'
export const white = '#fff'
export const red = '#CB1000'
export const orange = '#f26f28'
export const blue = '#4C66FC'
export const lightPurp = '#7c53c3'
export const pink = '#b93fb3'
export const smoke = '#eeeeee'
export const black = '#333'
export const green = '#5D9D3C'

export const styleSheet = StyleSheet.create({
    container: {
        margin: 24,
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    primaryButton: {
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'stretch',
        backgroundColor: blue,
        margin: 16
    },
    buttonTextLight: {
        fontSize: 16,
        color: white,
        alignSelf: 'center',
        fontWeight: '600'
    },
    secondaryButton: {
        borderRadius: 6,
        paddingVertical: 9,
        paddingHorizontal:16,
        alignItems: 'stretch',
        backgroundColor: white,
        borderColor: blue,
        borderWidth: 1,
        margin: 16
    },
    buttonTextDark: {
        fontSize: 16,
        color: blue,
        alignSelf: 'center',
        fontWeight: '600'
    },
    textButton: {
        borderRadius: 6,
        paddingVertical: 12,
        alignItems: 'stretch',
        margin: 16
    },
    textInput: {
        height: 40,
        alignItems: 'stretch',
        borderColor: smoke,
        backgroundColor: white,
        paddingHorizontal: 8,
        marginTop: 8,
        marginBottom:24
    },
    bodyRegular: {
        fontSize: 16,
        color: black
    },
    bodySmall: {
        fontSize: 14,
        color: black

    },
    header1: {
        fontSize: 24,
        color: black,
        fontWeight: '600',
        marginBottom:16
    },
    header2: {
        fontSize: 20,
        color: black,
        fontWeight: '400'
    }

});