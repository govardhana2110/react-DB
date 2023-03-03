import React, { useState, useEffect } from 'react';
import { Box, Container, Button, Tooltip } from '@mui/material';
import moment from 'moment';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TextBox from '../Commons/textBox';
import Title from '../Commons/title';
import axios from 'axios';
import { getService, ratingService } from '../../lib/services/rating';

const Collection = () => {
  const [theDate, setTheDate] = useState({
    date: '',
    time: '',
  });
  const [accountNo, setAccountNo] = useState();
  const [waitTime, setWaitTime] = useState(0);
  const [responseString, setResponseString] = useState('');
  const [successResponse, setSuccessResponse] = useState(0);
  const status = ['New', 'Successful', 'Failure', 'Response', 'TIME OUT'];
  const changeAcc = (evt) => {
    setAccountNo(evt.target.value);
  };
  const setDateTime = () => {
    const dateNow = new Date();
    setTheDate((prev) => ({
      date: moment(dateNow).format('yyyy-MM-DD'),
      time: moment(dateNow).format('hh:mm'),
    }));
  };
  const getTime = async (val) => {
    try {
      let response = await getService(val);
      if (response.status === 'Success') {
        setSuccessResponse(response.data.status);
        if (response.data.status !== 0) {
          setResponseString('');
        }
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };
  const onCollectionSubmit = async (evt) => {
    const dateFormate = moment(`${theDate.date} ${theDate.time}`).format(
      'MMDDHHmmYYYY.ss',
    );

    const inputVal = {
      command: `perl demo_change_pvt.pl -i ${accountNo} `,
      status: '0',
    };
    try {
      let response = await ratingService(inputVal);
      if (response.status === 'Success') {
        setResponseString(response.data.transactionId);
        setWaitTime(120);
        setDateTime();
      }
    } catch (err) {
      console.log(err);
    }
  };
  function secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    const hDisplay = h > 0 ? `${h < 10 ? `0${h}` : h}:` : '00:';
    const mDisplay = m > 0 ? `${m < 10 ? `0${m}` : m}:` : '00:';
    const sDisplay = s > 0 ? `${s < 10 ? `0${s}` : s}` : '00';
    return mDisplay + sDisplay;
  }
  useEffect(() => {
    const intervals =
      responseString &&
      waitTime > 0 &&
      setInterval(() => {
        setWaitTime((prev) => prev - 1);
        if (waitTime % 5 === 0) getTime(responseString);
        if (waitTime - 1 === 0) {
          setResponseString('');
          setSuccessResponse(4);
        }
      }, 1000);
    return () => clearInterval(intervals);
  }, [waitTime]);

  useEffect(() => {
    responseString && getTime(responseString);
  }, [responseString]);
  useEffect(() => {
    setDateTime();
  }, []);
  return (
    <>
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column" gap={2}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Title title="Collections" />
            {/* <Tooltip title="Reset Current Date & Time">
              <RestartAltIcon onClick={(e) => setDateTime()} />
            </Tooltip> */}
          </Box>

          <Box>
            <TextBox
              name="accountNo"
              title="Account No."
              type="text"
              placeholder="Enter Account No."
              value={accountNo}
              onChange={(e) => changeAcc(e)}
            />
          </Box>
          {responseString && successResponse === 0 ? (
            <Box>Wait Time {secondsToHms(waitTime)}</Box>
          ) : (
            <Box
              style={{
                color:
                  successResponse === 1
                    ? '#5cb85c'
                    : successResponse === 2 || successResponse === 4
                    ? 'tomato'
                    : '#343a40',
                fontWeight: 'bold',
              }}
            >
              {successResponse !== 0 && status[successResponse]}
            </Box>
          )}
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            gap={2}
          >
            <Button variant="outlined" color="primary">
              Cancle
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={(e) => onCollectionSubmit(e)}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Collection;
