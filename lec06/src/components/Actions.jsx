import { BellIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react";
import { useState } from "react";

const Actions = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="actions">
      <button aria-label="Notifications">
        <BellIcon size={20} />
      </button>
      <button aria-label="Shopping Cart">
        <ShoppingCartIcon size={20} />
      </button>
      <button className="login" onClick={() => setIsLogin(!isLogin)}>
        <p>{isLogin ? "Sign Out" : "Sign In"}</p>
        <UserIcon size={20} />
      </button>
    </div>
  );
};

export default Actions;
