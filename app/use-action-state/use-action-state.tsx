'use client';

import { useActionState } from 'react';

export function ActionStatePractice() {
  const [error, submitAction, isPending] = useActionState(async (prevState, formData) => {
    return null;
  }, null);

  return (
    <form>
      <h1 className="text-xl">Test Title</h1>
      <input type="text" name="name" />
    </form>
  );
}
