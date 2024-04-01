/* eslint-disable-next-line */

export interface LabelProps {}

import { useEffect, useState } from 'react';

export function Label(props: LabelProps) {
  const [resp, setResp] = useState<any>([]);

  useEffect(() => {
    fetch('/api')
      .then((_) => _.json())
      .then(setResp);
  }, []);

  return (
    <div>
      <h1>Welcome to Label! With: {resp.message}</h1>
    </div>
  );
}

export default Label;
