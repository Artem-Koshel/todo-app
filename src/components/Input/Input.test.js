import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './Input';

describe('Input component', () => {
  it('render correctly', () => {
    const { container } = render(<Input onEnterPress={jest.fn()} />);
    expect(container).toMatchSnapshot();
  });

  it('exec callback on Enter press', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    render(<Input onEnterPress={callback} />);

    await user.click(screen.getByRole('textbox'));
    await user.keyboard('test string{Enter}');

    expect(callback).toBeCalledWith('test string');
  });

  it('clear value after Enter press', async () => {
    const user = userEvent.setup();
    render(<Input onEnterPress={jest.fn()} />);

    await user.click(screen.getByRole('textbox'));
    await user.keyboard('test string{Enter}');

    const input = await screen.findByRole('textbox');
    expect(input.value).toBe('');
  });
});
