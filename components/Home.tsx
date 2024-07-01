import { Image, Pressable } from "react-native";
import { EquipView } from "./Equipment/EquipView";
import { CartModal } from "./CartModal";
import { useState } from "react";


export function Home() {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Pressable onPress={() => setShowCart(true)}>
        <Image
          style={{ width: 30, height: 30, margin: 20 }}
          source={require('../assets/cart.png')}
        />
      </Pressable>
      <CartModal openModal={showCart} />

      <EquipView />
    </>
  );
};
