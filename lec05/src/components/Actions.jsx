import { BellIcon, ShoppingCartIcon } from "@phosphor-icons/react";

const Actions = () => {
  return (
    <div className="actions">
      <button aria-label="Notifications">
        <BellIcon size={20} />
      </button>
      <button aria-label="Shopping Cart">
        <ShoppingCartIcon size={20} />
      </button>
    </div>
  );
};

export default Actions;
