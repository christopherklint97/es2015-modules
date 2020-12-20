/**
 * returns a randomly selected item from array of items
 *
 * @param items array of items
 */
function choice(items) {
  const randidx = Math.floor(Math.random() * items.length);
  return items[randidx];
}

/**
 * removes the first matching item from items, if item exists,
 * and returns it. Otherwise returns undefined.
 *
 * @param items array of items
 * @param item string item
 */
function remove(items, item) {
  const idx = items.indexOf(item);
  if (idx > -1) {
    items.splice(idx, 1);
  }
  return items;
}

export { choice, remove };
