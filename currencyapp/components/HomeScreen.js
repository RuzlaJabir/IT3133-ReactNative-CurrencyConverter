import React, { useState } from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import DropDownPicker from "react-native-dropdown-picker";

export default function HomeScreen() {
  

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

