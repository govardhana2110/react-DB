import excuteQuery from '../../../src/services/db';

export default async (req, res) => {
  return new Promise((resolve, reject) => {
    excuteQuery({
      query: `select transaction_id,response,status from ui_simulator_t where transaction_id=(select MAX(transaction_id) from ui_simulator_t where command=?)`,
      values: [req.body.command],
    })
      .then((response) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'max-age=180000');
        res.end(JSON.stringify(response));
        resolve();
      })
      .catch((error) => {
        res.json(error);
        res.status(405).end();
        resolve();
      });
  });
};
