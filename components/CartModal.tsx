import { Modal, StyleSheet, Text, View } from "react-native";
import { Equipment } from "../dummyEquips";

type EquipItem = {
  count: number;
  equip: Equipment;
};

interface CartModalProps {
  openModal: boolean;
  cart?: EquipItem[];
};
export function CartModal({ openModal }: CartModalProps) {
  return (
    <Modal visible={openModal} animationType="slide">
      <Text style={{ marginTop: 20 }}>Cart</Text>
    </Modal>
  );
};

const styles = StyleSheet.create({
});
