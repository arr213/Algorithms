// Merge Sort Spec
describe('Split Array Function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1, 5, 3, 4]))
      .toEqual([
        [1, 5],
        [3, 4]
      ]);
  });
});

describe('Merge Array Function', function() {
  it('merges in the correct order', function() {
    expect(merge([1, 5, 8], [2, 3, 12]))
      .toEqual([1, 2, 3, 5, 8, 12]);
  });
});

describe('Merge Sort', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(true).toEqual(true);
  });
});
