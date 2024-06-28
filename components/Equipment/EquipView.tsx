import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Equipment, dummyEquip } from "../../dummyEquips";
import { useEffect, useState } from "react";


export function EquipView() {
  const [search, setSearch] = useState('');
  const [clearSearch, setClearSearch] = useState(false);

  const [results, setResults] = useState(dummyEquip);
  const [empty, setEmpty] = useState(results.length === 0);
  // TODO: create a count of this on cart icon
  const [cart, setCart] = useState<Equipment[]>([]);

  function searchEquip(input: string) {
    setSearch(input);

    setResults(dummyEquip.filter((equip) => {
      return equip.name.toLowerCase().includes(input.toLowerCase());
    }));
    if (results.length === 0) setEmpty(true);
  }

  function checkInput() {
    if (clearSearch) {
      setSearch('');
      setResults(dummyEquip);
      setEmpty(results.length === 0);
      setClearSearch(false);
    }
    return search;
  }

  function addEquip(index: number) {
    setCart([...cart, results[index]]);
    // console.log(cart);
  }

  useEffect(() => {
    if (results.length === 0) setEmpty(true);
  }, [results]);

  return (
    <>
      <View style={styles.equipInput}>
        <TextInput
          style={{ fontSize: 16 }}
          placeholder='Search here...'
          // this should be determined by no results
          // maxLength

          onChangeText={searchEquip}
          value={checkInput()}
        />
        <TouchableOpacity onPress={() => setClearSearch(true)}>
          <Text style={{color: 'gray'}}>X</Text>
        </TouchableOpacity>
      </View>

      {empty && <Text style={{marginTop: 16, fontSize: 16}}>No results found.</Text>}
      <FlatList
        style={styles.equipResults}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, name, category, price, availability, description }, index }) => {

          return (
            <View style={styles.equipItem}>

              <View style={styles.equipHeader}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ ...styles.caption, textAlign: 'center' }}>{description}</Text>

              </View>

              <View style={styles.equipInfo}>
                <Text style={{ fontStyle: 'italic'}}>${price.toLocaleString()}</Text>

                <View style={styles.equipStock}>
                  {availability === 'In Stock' && <Text style={{ ...styles.caption, color: 'green' }}>{availability}</Text>}
                  {availability === 'Limited Stock' && <Text style={{ ...styles.caption, color: 'orange' }}>{availability}</Text>}
                  {availability === 'Out of Stock' && <Text style={{ ...styles.caption, color: 'red' }}>{availability}</Text>}

                  {availability !== 'Out of Stock' && <TouchableOpacity onPress={() => addEquip(index)}>
                    <Text style={styles.equipAddBtn}>Add to Cart</Text>
                  </TouchableOpacity>}
                  
                </View>
              </View>

              {/* <Text>{category}</Text> */}
            </View>
          );
        }}
      />
    </>
  );
};


const styles = StyleSheet.create({
  caption: {
    margin: 4,
    fontSize: 14,
  },

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

    // fontSize: 160,
  },


  equipResults: {
    // width: '100%',
    // flex: 5,
    marginTop: 24,
    flexDirection: 'column',
    // height: '80%'
  },
  equipItem: {
    marginTop: 8,
    marginBottom: 8,
    padding: 4,

    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    // borderRadius: 6,sde
  },
  equipHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',

    // backgroundColor: 'red',
  },
  equipInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  equipStock: {
    flexDirection: 'row',
  },
  equipAddBtn: {
    padding: 4,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#cccccc',
  }
});