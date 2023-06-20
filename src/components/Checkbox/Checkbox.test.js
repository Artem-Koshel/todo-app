import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './Checkbox';

describe('Checkbox component', () => {
  it.each([true, false])('renders correctly, checked: %p', (checked) => {
    const { container } = render(
      <Checkbox id="testId" text="label text" checked={checked} onChange={jest.fn()} />
    );
    expect(container).toMatchSnapshot();
  });

  it('exec callback on checked/unchecked', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    render(<Checkbox id="testId" text="label text" checked={true} onChange={callback} />);
    await user.click(screen.getByText('label text'));
    expect(callback).toBeCalled();
  });
});
