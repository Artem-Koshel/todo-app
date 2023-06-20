import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithProviders from '../../utils/test-utils';
import ControlBar from './ControlBar';

const mockRadio = jest.fn();
jest.mock('../../components/TextRadioButtons/TextRadioButtons', () => (props) => {
  mockRadio(props);
  return <div data-testid="text-radio-buttons" />;
});

describe('ControlBar component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  it('renders correctly', () => {
    const state = {
      todoList: [
        {
          id: 1,
          done: true,
        },
        {
          id: 2,
          done: false,
        },
        {
          id: 3,
          done: true,
        },
      ],
      selectedFilter: 'All',
    };
    const { container } = renderWithProviders(<ControlBar />, { preloadedState: state });

    expect(container).toMatchSnapshot();
    expect(mockRadio).toBeCalledWith(
      expect.objectContaining({
        name: 'filters',
        selectedValue: 'All',
        values: ['All', 'Active', 'Completed'],
        onChange: expect.any(Function),
      })
    );
  });
});
