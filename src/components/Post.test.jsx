import { render, screen } from '@testing-library/react'
import Post from './Post'
import { describe, it, expect } from 'vitest'

describe('Post component', () => {
  it('renders title and body', () => {
    render(<Post title="Hello" body="World" />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('World')).toBeInTheDocument()
  })
})
