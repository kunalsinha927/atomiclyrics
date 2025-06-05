import { render, screen } from '@testing-library/react';
import Post from './Post';

describe('Post component', () => {
  it('renders a post with title and content', () => {
    render(<Post title="Test Title" content="This is test content." />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('This is test content.')).toBeInTheDocument();
  });
});
