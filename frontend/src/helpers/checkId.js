export function checkID(mainObject, addedObject) {
  const existingID = mainObject.map((el) => el.id);
  const checkedAddedObject = addedObject.filter((el) => {
    return !existingID.includes(el.id);
  });
  return checkedAddedObject;
}
