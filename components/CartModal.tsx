import { Button, FlatList, Modal, StyleSheet, Text } from "react-native";
import { Equipment } from "../dummyEquips";
import { EquipItem } from "./Equipment/EquipItem";

interface CartModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  cart: Equipment[];
  setCart: (cart: Equipment[]) => void;
  addEquip: (id: string) => void;
  removeEquip: (id: string) => void;
};
export function CartModal({ isOpen, setIsOpen, cart, setCart, addEquip, removeEquip }: CartModalProps) {
  return (
    <Modal visible={isOpen} animationType="slide">
      <Text style={{ marginTop: 20 }}>Cart</Text>
      <Button title="Close" onPress={() => setIsOpen(false)} />

      <FlatList
        // TODO: should this filter be in a useEffect?
        data={cart.filter(({ count }) => count && count > 0)}
        keyExtractor={(item) => item.id}
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
    </Modal>
  );
};

const styles = StyleSheet.create({
});
