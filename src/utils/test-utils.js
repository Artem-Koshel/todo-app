import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import setupStore from '../redux/store';

export default function renderWithProviders(
  ui,
  { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions } = {}
) {
  /* eslint-disable react/prop-types */
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  /* eslint-enable react/prop-types */
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
