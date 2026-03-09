function listToArray(list) {
  const result = [];
  while (list) {
    result.push(list.val);
    list = list.next;
  }
  return result;
}

module.exports = {
  listToArray
}