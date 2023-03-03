import excuteQuery from '../../../src/services/db';

export default async (req, res) => {
  return new Promise((resolve, reject) => {
    excuteQuery({
      query:
        'INSERT INTO ui_simulator_t(created_t,command,status) VALUES(?,?,?)',
      values: [req.body.date, req.body.command, req.body.status],
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
