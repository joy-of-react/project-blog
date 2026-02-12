// this function takes an array of items, index of a group, and number of items in each group,
// and returns a slice of the items array that fits in the particular group
export function getItemsInGroup(items, groupIndex, numOfItemsPerGroup) {
  const slice = items.slice(
    groupIndex * numOfItemsPerGroup,
    groupIndex * numOfItemsPerGroup + numOfItemsPerGroup,
  );
  
  return slice;
}
