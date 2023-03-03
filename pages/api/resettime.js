import excuteQuery from '../../src/services/db';

const ResetAppTime = async ({ theDate }) => {
  try {
    const result = await excuteQuery({
      query: 'INSERT INTO change_pvt_t (id, time ) VALUES(?, ?)',
      values: [null, `${theDate.date} ${theDate.time}`],
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
export default ResetAppTime;
