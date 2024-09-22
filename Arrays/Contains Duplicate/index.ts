const hasDuplicate = (nums: number[]) => {
  const hashSet = new Set();

  for (const num of nums) {
    if (hashSet.has(num)) return true;

    hashSet.add(num);
  }

  return false;
};
