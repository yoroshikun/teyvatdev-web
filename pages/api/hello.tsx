import type { NextApiRequest, NextApiResponse } from 'next';

const hello = (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  res.json({ name: 'John Doe' });
};

export default hello;
