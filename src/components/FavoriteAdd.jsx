const FavoriteAdd = ({ obj, storageKey }) => {
  //
  //
  const handleFavorite = (obj, storageKey) => {
    //
    // Retrieve list in local storage
    const storageList = JSON.parse(localStorage.getItem(storageKey) || "[]");

    // Copy object
    const newObj = { ...obj };

    // Check if new object is not already inside
    let isUnique = true;
    for (const obj of storageList) {
      if (obj._id === newObj._id) {
        isUnique = false;
      }
    }

    // Add to list if not already inside
    if (isUnique) {
      storageList.push(newObj);
      localStorage.setItem(storageKey, JSON.stringify(storageList));
    }
  };

  return (
    // Add and display check at click (full css)
    // <label className="favorite" onClick={() => handleFavorite(obj, storageKey)}>
    //   <i className="fa-regular fa-heart"></i>
    //   <input type="button" className="scale-on-click" value="&#x2713;" />
    // </label>
    <button
      className="favorite-button"
      onClick={() => handleFavorite(obj, storageKey)}
    >
      <i className="fa-regular fa-heart"></i>
    </button>
  );
};

export default FavoriteAdd;
