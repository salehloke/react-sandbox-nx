import { fireEvent, render } from '@testing-library/react';

import Todo from './todo';

describe('Todo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Todo />);
    expect(baseElement).toBeTruthy();
  });

  // it('should allows adding a new todo', () => {
  //   const { getByLabelText, getByText } = render(<Todo />);
  //   const newTodoInput = getByLabelText('New todo:');
  //   fireEvent.change(newTodoInput, { target: { value: 'Buy bread' } });
  //   fireEvent.click(getByText('Add'));
  //   expect(getByText('Buy bread')).toBeTruthy();
  // });

  // it('should allows completing a todo', () => {
  //   const { getByLabelText, getByText } = render(<Todo />);
  //   const newTodoInput = getByLabelText('New todo:');
  //   fireEvent.change(newTodoInput, { target: { value: 'Buy bread' } });
  //   fireEvent.click(getByText('Add'));
  //   fireEvent.click(getByText('Buy bread'));
  //   // expect(getByText('Buy bread')).toHaveClass('completed');
  // })

});
