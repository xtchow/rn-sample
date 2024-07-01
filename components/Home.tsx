import { Image, Pressable } from "react-native";
import { EquipView } from "./Equipment/EquipView";
import { CartModal } from "./CartModal";
import { useState } from "react";
import { Equipment, dummyEquip } from "../dummyEquips";


export function Home() {
  const [showCart, setShowCart] = useState(false);
  // TODO: create a count of this on cart icon
  const [cart, setCart] = useState<Equipment[]>(dummyEquip);

  function addEquip(key: string) {
    const newCart = cart.map((equip) => {
      const { id, count } = equip;
      if (key === id) {
        return { ...equip, count: count + 1 };
      } else {
        return equip;
      }
    });

    setCart(newCart);
    // console.log(cart);
  }

  function removeEquip(key: string) {
    const newCart = cart.map((equip) => {
      const { id, count } = equip;
      if (key === id) {
        return { ...equip, count: count - 1 };
      } else {
        return equip;
      }
    });

    setCart(newCart);
    // console.log(cart);
  }

  return (
    <>
      <Pressable onPress={() => setShowCart(true)}>
        <Image
          style={{ width: 30, height: 30, margin: 20 }}
          source={require('../assets/cart.png')}
        />
      </Pressable>
      <CartModal
        isOpen={showCart}
        setIsOpen={setShowCart}
        cart={cart}
        setCart={setCart}
        addEquip={addEquip}
        removeEquip={removeEquip}
      />

      <EquipView
        addEquip={addEquip}
        removeEquip={removeEquip}
      />
    </>
  );
};
