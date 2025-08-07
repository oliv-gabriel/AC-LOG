import { useState } from "react";  
import { View, Text, StyleSheet, StatusBar, Alert, Pressable, Platform, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { styles } from './styles';
import ItemList from "@/components/navBar/ItemList";
import DateTimePicker from '@react-native-community/datetimepicker';
import React from "react";
import Autocomplete from 'react-native-autocomplete-input';

export default function Index() {
  // DATA
  const [name, setName] = useState<string>("");
  const [data, setData] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const formatarData = (date: Date) => {
    return date.toLocaleDateString("pt-BR");
  };

  // INPUNT DROPDOWN
  const [cheioOuVazio, setCheioOuVazio] = useState('');
  const [cheioOuVazioOptions] = useState(['Cheio', 'Vazio']);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleNext() {
    router.navigate("/dashboard");
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>
        AC LOG {name}
      </Text>
    <View style={styles.row}>
      {/* Campo de Data */}
      <Pressable onPress={() => setShowDatePicker(true)} style={styles.dateField}>
        <Text style={styles.dateText}>{formatarData(data)}</Text>
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={data}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event, selectedDate) => {
            if (Platform.OS !== "ios") setShowDatePicker(false);
            if (selectedDate) setData(selectedDate);
          }}
        />
      )}

      
        <Input onChangeText={setName} placeholder="Cliente" />
      </View>

      <View style={styles.row}>
        <Input onChangeText={setName} placeholder="Num OS" />
        <Input onChangeText={setName} placeholder="Origem" />
      </View>

      <View style={styles.row}>
        <Input onChangeText={setName} placeholder="Destino" />
        <Input onChangeText={setName} placeholder="Container" />
      </View>

      <View style={styles.row}>
        
  <Autocomplete
    data={
      showDropdown && cheioOuVazio
        ? cheioOuVazioOptions.filter((item) =>
            item.toLowerCase().includes(cheioOuVazio.toLowerCase())
          )
        : []
    }
    defaultValue={cheioOuVazio}
    onChangeText={(text) => {
      setCheioOuVazio(text);
      setShowDropdown(true);
    }}
    flatListProps={{
      keyExtractor: (_, idx) => idx.toString(),
      renderItem: ({ item }) => (
        <TouchableOpacity
          onPress={() => {
            setCheioOuVazio(item);
            setShowDropdown(false);
          }}
        >
          <Text style={styles.itemText}>{item}</Text>
        </TouchableOpacity>
      ),
    }}
    inputContainerStyle={styles.inputContainer}
    listContainerStyle={styles.dropdownContainer}
    placeholder="Cheio ou Vazio"
  />

        <Input onChangeText={setName} placeholder="Cavalo" />
      </View>

      <View style={styles.row}>
        <Input onChangeText={setName} placeholder="Carreta" />
        <Input onChangeText={setName} placeholder="Motorista" />
      </View>

      <View style={styles.row}>
        <Input onChangeText={setName} placeholder="Provedor" />
        <Input onChangeText={setName} placeholder="Valor" />
      </View>

      <Button title="Enviar" onPress={handleNext} />
      <ItemList color="#482a80" />
    </View>
  );
}

