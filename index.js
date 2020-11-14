import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { schema } from './data/schema';

const app = express();
const port = 4000;

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.get('/', async (req, res) => {
  res.send('Welcome!');
});

app.listen(port, () => {
  console.log(`listening on: http://localhost:${port}/graphql`);
});
