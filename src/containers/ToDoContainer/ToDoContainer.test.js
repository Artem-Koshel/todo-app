import React from 'react';
import renderWithProviders from '../../utils/test-utils';
import ToDoContainer from './ToDoContainer';

const mockInput = jest.fn();
jest.mock('../../components/Input/Input', () => (props) => {
  mockInput(props);
  return <div data-testid="input" />;
});

const mockList = jest.fn();
jest.mock('../../components/List/List', () => (props) => {
  mockList(props);
  return <div data-testid="list" />;
});

jest.mock('../ToDoItem/ToDoItem', () => 'mockTodoItem');
jest.mock('../ControlBar/ControlBar', () => 'mockControlBar');

describe('ToDoContainer component', () => {
  it('renders correctly', () => {
    const items = [1, 2, 3];
    const { container } = renderWithProviders(<ToDoContainer />, {
      preloadedState: { todoList: items },
    });
    expect(mockList).toBeCalledWith(
      expect.objectContaining({
        Item: 'mockTodoItem',
        ControlBar: 'mockControlBar',
        items,
      })
    );
    expect(mockInput).toBeCalledWith(
      expect.objectContaining({
        onEnterPress: expect.any(Function),
      })
    );
    expect(container).toMatchSnapshot();
  });
});
