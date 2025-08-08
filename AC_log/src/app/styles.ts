import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 27,
        alignItems: 'center',
        gap: 16,
    },

    title: {
        color: '#482a80',
        fontSize: 24,
        fontWeight: 'bold',
    },
    row :{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
     dateField: {
  borderColor: '#482a80',
  borderWidth: 1,
  borderRadius: 8,
  height: 40,
  justifyContent: 'center', 
  paddingHorizontal: 8,
  flex: 1,
  marginHorizontal: 5,
},

  dateText: {
  fontSize: 16,
  color: '#482a80',
},

    inputContainer: {
    borderWidth: 1,
    borderColor: '#482a80',
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  dropdownContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    position: 'absolute',     
    top: 50,                   
    zIndex: 1000,              
  },
  itemText: {
    padding: 8,
    fontSize: 16,
  },

});