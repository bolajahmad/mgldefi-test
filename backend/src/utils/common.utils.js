exports.getPlaceholderStringForArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error("Invalid input");
  }

  // if is array, we'll clone the arr
  // and fill the new array with placeholders
  const placeholders = [...arr];
  return placeholders.fill("?").join(", ").trim();
};

exports.multipleColumnSet = (object) => {
  let columnSet;
  if (typeof object !== "object") {
    throw new Error("Invalid input");
  }

  const keys = Object.keys(object);
  const values = Object.values(object);

  columnSet = keys.map((key) => `${key} = ?`).join(", ");
  console.log({ columnSet, values });

  return {
    columnSet,
    values,
  };
};
