const FavoriteRemove = ({ obj, storageKey }) => {
  //
  //
  const handleFavorite = (obj, storageKey) => {
    //
    // Retrieve list in local storage
    const storageList = JSON.parse(localStorage.getItem(storageKey) || "[]");

    // // Copy object
    // const newObj = { ...obj };

    // // Check if new object is not already inside
    // let isUnique = true;
    const newStorageList = [];

    for (const myobj of storageList) {
      if (myobj._id !== obj._id) {
        newStorageList.push(myobj);
      }
    }

    localStorage.setItem(storageKey, JSON.stringify(newStorageList));
  };

  return (
    <div className="favorite" onClick={() => handleFavorite(obj, storageKey)}>
      <i className="fa-regular fa-trash-can"></i>
    </div>
  );
};

export default FavoriteRemove;
