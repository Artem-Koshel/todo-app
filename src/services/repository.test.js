import { getList, addItem, removeItem, removeItems, toggleStatus } from './repository';

jest.mock('nanoid', () => ({
  nanoid: () => 'newId',
}));

const mockGetItem = jest.fn();
const mockSetItem = jest.fn();

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (...args) => mockGetItem(...args),
    setItem: (...args) => mockSetItem(...args),
  },
});

describe('repository', () => {
  beforeEach(() => {
    mockGetItem.mockClear();
    mockSetItem.mockClear();
  });
  it('getList', () => {
    const storedArray = [{ id: 1, text: 'test', done: true }];
    mockGetItem.mockImplementation(() => JSON.stringify(storedArray));
    const actual = getList();
    expect(actual).toEqual(storedArray);
  });
  it('addItem', () => {
    const storedArray = [{ id: 1, text: 'test', done: true }];
    mockGetItem.mockImplementation(() => JSON.stringify(storedArray));
    const result = addItem({ text: 'test 2', done: false });
    expect(mockSetItem).toBeCalledWith(
      expect.anything(),
      JSON.stringify([...storedArray, { id: 'newId', text: 'test 2', done: false }])
    );
    expect(result).toBe('newId');
  });
  it('removeItem', () => {
    const storedArray = [{ id: 1, text: 'test', done: true }];
    mockGetItem.mockImplementation(() => JSON.stringify(storedArray));
    removeItem(1);
    expect(mockSetItem).toBeCalledWith(expect.anything(), '[]');
  });
  it('removeItems', () => {
    const storedArray = [
      { id: 1, text: 'test', done: true },
      { id: 2, text: 'test 2', done: true },
      { id: 3, text: 'test 3', done: false },
    ];
    mockGetItem.mockImplementation(() => JSON.stringify(storedArray));
    removeItems([1, 3]);
    expect(mockSetItem).toBeCalledWith(
      expect.anything(),
      JSON.stringify([{ id: 2, text: 'test 2', done: true }])
    );
  });
  it('toggleStatus', () => {
    const storedArray = [{ id: 1, text: 'test', done: false }];
    mockGetItem.mockImplementation(() => JSON.stringify(storedArray));
    toggleStatus(1);
    storedArray[0].done = true;
    expect(mockSetItem).toBeCalledWith(expect.anything(), JSON.stringify(storedArray));
  });
});
