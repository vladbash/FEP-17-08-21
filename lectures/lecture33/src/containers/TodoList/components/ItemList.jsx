import React from "react";

const ItemList = ({ list = [], onRemove }) => {
  return (
    <div className="lists">
      <ul className="nes-list is-disc">
        {list.map((e) => (
          <li key={e.id}>
            {e.value}
            <button
              type="button"
              className="nes-btn is-error"
              onClick={() => onRemove(e)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
