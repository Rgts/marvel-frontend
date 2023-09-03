const FavoriteRemove = ({ obj, storageKey }) => {
  //
  //
  const handleFavorite = (obj, storageKey) => {
    //
    // Retrieve list in local storage
    const storageList = JSON.parse(localStorage.getItem(storageKey) || "[]");
    const newStorageList = [];

    for (const myobj of storageList) {
      if (myobj._id !== obj._id) {
        newStorageList.push(myobj);
      }
    }

    localStorage.setItem(storageKey, JSON.stringify(newStorageList));
    // Force page refresh (otherwise, pass data useState in props)
    window.location.href = "/favorites";
  };

  return (
    // Add and display check at click (full css)
    <label className="favorite" onClick={() => handleFavorite(obj, storageKey)}>
      <i className="fa-regular fa-trash-can"></i>
      <input type="button" className="scale-on-click" value="&#x2714;" />
    </label>
  );
};

export default FavoriteRemove;
