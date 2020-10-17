const HashTable = require('./hashtable');

describe('linked list module', () => {
  it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
    let myHash = new HashTable(1024);
    myHash.add('xyz', 123);
    expect(myHash.contains('xyz')).toBeTruthy();

  });
  it(' Retrieving based on a key returns the value stored', () => {
    let myHash = new HashTable(1024);
    myHash.add('xyz', 123);
    expect(myHash.get('xyz').head.value['xyz']).toEqual(123);

  });
  it(' Successfully returns null for a key that does not exist in the hashtable', () => {
    let myHash = new HashTable(1024);
    myHash.add('xyz', 123);
    expect(myHash.get('dataNotexist')).toEqual(null);
  });
  it(' Successfully handle a collision within the hashtable', () => {
    let myHash = new HashTable(1024);
    myHash.add('xyz', 123);
    myHash.add('xyz', 456);
    expect(myHash.contains('xyz')).toBeTruthy();
  });
  it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    let myHash = new HashTable(1024);
    myHash.add('xyz', 123);
    myHash.add('Zyx', 456);
    expect(myHash.get('Zyx').head.next.value['Zyx']).toEqual(456);
  });
  it('Successfully hash a key to an in-range value', () => {
    let myHash = new HashTable(1024);
    expect(myHash.hash('xyz')).toEqual(318);
  });

});
