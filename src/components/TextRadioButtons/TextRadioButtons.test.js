import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextRadioButtons from './TextRadioButtons';

describe('TextRadioButtons component', () => {
  it('renders correctly', () => {
    const values = ['value1', 'value2', 'value3'];
    const { container } = render(
      <TextRadioButtons
        name="test name"
        selectedValue="value2"
        values={values}
        onChange={jest.fn()}
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('exec callback on change', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    const { container } = render(
      <TextRadioButtons
        name="test name"
        selectedValue="value2"
        values={['value1', 'value2', 'value3']}
        onChange={callback}
      />
    );

    await user.click(container.querySelector('#value3'));

    expect(callback).toBeCalledWith('value3');
  });
});
