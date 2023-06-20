import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './List';

describe('List component', () => {
  it('renders correctly', () => {
    const items = [
      { id: 1, text: 'text 1' },
      { id: 2, text: 'text 2' },
      { id: 3, text: 'text 3' },
    ];

    const Item = ({ item }) => <span data-testid={item.id}>{item.text}</span>;
    const ControlBar = () => <div data-testid="control-bar-id" />;

    const { container } = render(<List items={items} Item={Item} ControlBar={ControlBar} />);

    expect(container).toMatchSnapshot();
  });
});
