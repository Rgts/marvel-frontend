const FavoriteRemove = ({ obj, storageKey }) => {
  //
  //
  const handleFavorite = (obj, storageKey) => {
    //
    // To differentiate comics and characters
    // alert(objType);

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
    <div className="favorite" onClick={() => handleFavorite(obj, storageKey)}>
      <i className="fa-regular fa-heart"></i>
    </div>
  );
};

export default FavoriteRemove;
