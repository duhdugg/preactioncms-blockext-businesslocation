import React from 'react'
import { render } from '@testing-library/react'
import MockCMS from './MockCMS'

test('renders', () => {
  const result = render(<MockCMS />)
  expect(result).toBeTruthy()
})
