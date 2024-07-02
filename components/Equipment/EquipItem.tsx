import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Equipment } from "../../dummyEquips";
import { master } from "../../master";


interface EquipItemProps {
  item: Equipment;
  addEquip: (id: string) => void;
  removeEquip: (id: string) => void;
};
export function EquipItem({ item: { id, name, description, price, availability, count }, addEquip }: EquipItemProps) {

  return (
    <View style={styles.equipItem}>
      <View style={styles.equipHeader}>
        <Text style={{ ...master.body, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ ...styles.caption, textAlign: 'center' }}>{description}</Text>
      </View>

      <View style={styles.equipInfo}>
        <Text style={{ fontStyle: 'italic' }}>${price.toLocaleString()}</Text>

        <View style={styles.equipStock}>
          {availability === 'In Stock' && <Text style={{ ...styles.caption, color: 'green' }}>{availability}</Text>}
          {availability === 'Limited Stock' && <Text style={{ ...styles.caption, color: 'orange' }}>{availability}</Text>}
          {availability === 'Out of Stock' && <Text style={{ ...styles.caption, color: 'red' }}>{availability}</Text>}

          {/* TODO: do not allow minus on 0 */}

          {availability !== 'Out of Stock' && (
            // TODO: elaborate on this (needs to display count, add, remove)
            <TouchableOpacity onPress={() => addEquip(id)}>
              <Text style={styles.equipAddBtn}>Add to Cart</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  caption: {
    ...master.second,
    margin: 4,
  },

  equipItem: {
    marginTop: 8,
    marginBottom: 8,
    padding: 4,

    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    // borderRadius: 6,
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
  },
});