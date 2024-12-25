import React, { useState } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import DropDownPicker from "react-native-dropdown-picker";

export default function HomeScreen() {
    const [amount, setAmount] = useState("");
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('LKR');
    const [result, setResult] = useState("");
    const [error, setError] = useState("");
  
    const [fromCurrencyOpen,setFromCurrencyOpen] = useState(false);
    const [toCurrencyOpen,setToCurrencyOpen] = useState(false);
  
    const exchangeRates = {
      USD: { LKR: 320, EUR: 0.91 },
      LKR: { USD: 0.0031, EUR: 0.0028 },
      EUR: { USD: 1.1, LKR: 355 },
    };
  
    const handleConvert = () => {
      if (!amount || isNaN(amount)) {
        setError('Please enter a valid number.');
        return;
      }
      setError("");
      const rate = exchangeRates[fromCurrency][toCurrency];
      const conResult = parseFloat(amount) * rate;
      setResult(conResult.toFixed(2));
    };
  
    const currencyOptions = [
      { label: "USD", value: "USD"},
      { label: "LKR", value: "LKR"},
      { label: "EUR", value: "RUR"},
    ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Currency Converter</Text>
      
      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter amount'
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>From Currency:</Text>
      <DropDownPicker
      open={fromCurrencyOpen}
      value={fromCurrency}
      items={currencyOptions}
      setOpen={setFromCurrencyOpen}
      setValue={setFromCurrency}
      setItems={() => {}}
      style={styles.dropdown}
      placeholder="Select currency"
      dropDownContainerStyle={styles.dropdownContainer}
    />

<Text style={styles.label}>To Currency:</Text>
      <DropDownPicker
        open={toCurrencyOpen}
        value={toCurrency}
        items={currencyOptions}
        setOpen={setToCurrencyOpen}
        setValue={setToCurrency}
        setItems={() => {}}
        style={styles.dropdown}
        placeholder="Select currency"
        dropDownContainerStyle={styles.dropdownContainer}
      />

      <Button mode="contained" onPress={handleConvert} style={styles.button}>
        Convert
      </Button>

      {result ? (
        <Text style={styles.result}>Converted Amount: {result}{toCurrency}</Text>
      ) : null}

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: '#ffffff',
      alignItems: 'center'
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginVertical: 10,
    },
    input: {
      height: 40,
      borderColor: "gray",
      borderWidth: 1,
      width: "100%",
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    dropdown: {
      marginBottom: 20,
      width: "100%",
      borderColor: "#ccc",
    },
    dropdownContainer: {
      borderColor: "#ccc",
      zIndex: 1000,
    },
    button: {
      marginVertical: 12,
    },
    result: {
      fontSize: 18,
      marginTop: 20,
      textAlign: 'center',
      color: 'green',
    },
    error: {
      fontSize: 16,
      color: "red",
      marginTop: 20,
    },
  });
  