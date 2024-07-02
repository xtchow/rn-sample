import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Equipment, dummyEquip } from "../../dummyEquips";
import { useEffect, useState } from "react";
import { EquipItem } from "./EquipItem";
import { master } from "../../master";

interface EquipViewProps {
  addEquip: (id: string) => void;
  removeEquip: (id: string) => void;
};
export function EquipView({ addEquip, removeEquip }: EquipViewProps) {
  const [search, setSearch] = useState('');
  const [clearSearch, setClearSearch] = useState(false);

  const [results, setResults] = useState(dummyEquip);
  const [isEmpty, setIsEmpty] = useState(results.length === 0);

  function searchEquip(input: string) {
    // TODO: remove starting and trailling spaces
    setSearch(input);

    const newResults = dummyEquip.filter((equip) => {
      return equip.name.toLowerCase().includes(input.toLowerCase());
    });
    setResults(newResults);

    if (newResults.length === 0) {
      setIsEmpty(true);
    }
  }

  function checkInput() {
    if (clearSearch) {
      setSearch('');
      setResults(dummyEquip);
      // TODO: somewhere needs to make sure that the original data is never empty?
      setIsEmpty(false);
      setClearSearch(false);
    }
    return search;
  }



  useEffect(() => {
    if (results.length === 0) {
      setIsEmpty(true);
    }
  }, [results, setIsEmpty]);

  return (
    <>
      <View style={styles.equipInput}>
        <TextInput
          style={master.body}
          placeholder="Search here..."
          // this should be determined by no results
          // maxLength

          onChangeText={searchEquip}
          value={checkInput()}
        />
        <TouchableOpacity onPress={() => setClearSearch(true)}>
          <Text style={{ color: 'gray' }}>X</Text>
        </TouchableOpacity>
      </View>

      {/* TODO: this still appears after clearing search bar */}
      {isEmpty && <Text style={{ marginTop: 16, fontSize: 16 }}>No results found.</Text>}
      <FlatList
        style={styles.equipResults}
        data={results}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <EquipItem
              item={item}
              addEquip={addEquip}
              removeEquip={removeEquip}
            />
          );
        }}
      />
    </>
  );
};


const styles = StyleSheet.create({
  equipInput: {
    marginTop: '20%',
    padding: 4,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',

    // padding: 4,
    borderWidth: 1,
    borderColor: '#cccccc',

  },


  equipResults: {
    // width: '100%',
    // flex: 5,
    marginTop: 24,
    flexDirection: 'column',
    // height: '80%'
  },

});