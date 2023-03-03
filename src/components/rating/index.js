import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Button,
  Tooltip,
  MenuItem,
  Typography,
  InputAdornment,
  Slide,
} from '@mui/material';
import moment from 'moment';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TextBox from '../Commons/textBox';
import Title from '../Commons/title';
import DropDown from '../Commons/dropDown';
import axios from 'axios';
import { getService, ratingService } from '../../lib/services/rating';

const RunBilling = () => {
  const [theDate, setTheDate] = useState({
    date: '',
    time: '',
  });
  const [data, setData] = useState({
    callingNumber: '',
    serviceType: 'voice',
    startTime: theDate.time,
    endTime: theDate.time,
    bytes: '1',
    messages: '1',
  });
  const [waitTime, setWaitTime] = useState(0);
  const [responseString, setResponseString] = useState('');
  const [successResponse, setSuccessResponse] = useState(0);
  const status = ['New', 'Successful', 'Failure', 'Response', 'TIME OUT'];
  const handleDataChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const changeDate = (evt) => {
    const { name, value } = evt.target;
    setTheDate((prev) => ({
      ...prev,
      [name]: value,
    }));
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
  const onRatingSubmit = async (evt) => {
    const dateFormate = moment(`${theDate.date} ${theDate.time}`).format(
      'MMDDHHmmYYYY.ss',
    );
    const [startHrs, startMns] = data.startTime.split(':');
    const [endtHrs, endMns] = data.endTime.split(':');
    let startDate = new Date();
    startDate.setHours(startHrs, startMns, 0);
    let endDate = new Date();
    endDate.setHours(endtHrs, endMns, 0);
    let usedTime = Math.round(Math.abs(endDate - startDate) / 1000);

    const inputVal = {
      command: `perl demo_change_pvt.pl -i ${data.callingNumber} -s ${
        data.serviceType
      } -u ${
        data.serviceType === 'data'
          ? data.bytes
          : data.serviceType === 'sms'
          ? data.messages
          : usedTime
      } `,
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
            <Title title="Rating" />
            {/* <Tooltip title="Reset Current Date & Time">
              <RestartAltIcon onClick={(e) => setDateTime()} />
            </Tooltip> */}
          </Box>

          <Box>
            <TextBox
              name="callingNumber"
              title="Calling Number"
              required
              type="text"
              placeholder="Enter Calling Number"
              value={data.callingNumber}
              onChange={(e) => handleDataChange(e)}
            />
          </Box>
          <Box>
            <DropDown
              title="Select Service"
              // required={index===0 ? true : false}
              // disabled={id}
              required
              fullWidth
              // error={errors.RateTypeErr}
              // onBlur={() => varifyData("rateType")}
              label="Select Service"
              value={data.serviceType}
              size="small"
              name="serviceType"
              displayEmpty
              style={{
                width: '100%',
              }}
              onChange={(evnt) => handleDataChange(evnt)}
            >
              <MenuItem value="voice" style={{ fontSize: 13 }}>
                Voice
              </MenuItem>
              <MenuItem value="data" style={{ fontSize: 13 }}>
                Data
              </MenuItem>
              <MenuItem value="sms" style={{ fontSize: 13 }}>
                SMS
              </MenuItem>
            </DropDown>
          </Box>
          {data.serviceType === 'voice' && (
            <Slide
              direction="right"
              in={data.serviceType === 'voice'}
              mountOnEnter
              unmountOnExit
            >
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  padding: '15px',
                }}
              >
                <Box>
                  <Typography fontWeight={600}>Voice Service</Typography>
                </Box>
                <Box>
                  <TextBox
                    name="date"
                    title="Choose Date of Service"
                    required
                    type="date"
                    value={theDate.date}
                    onChange={(e) => changeDate(e)}
                  />
                </Box>
                <Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    width="100%"
                  >
                    <Box width="45%">
                      <TextBox
                        name="startTime"
                        title="Choose start time"
                        type="time"
                        required
                        value={data.startTime}
                        onChange={(e) => handleDataChange(e)}
                      />
                    </Box>
                    <Box width="45%">
                      <TextBox
                        name="endTime"
                        title="Choose end time"
                        type="time"
                        required
                        value={data.endTime}
                        onChange={(e) => handleDataChange(e)}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Slide>
          )}

          {data.serviceType === 'data' && (
            <Slide
              direction="right"
              in={data.serviceType === 'data'}
              mountOnEnter
              unmountOnExit
            >
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  padding: '15px',
                }}
              >
                <Box>
                  <Typography fontWeight={600}>Data Service</Typography>
                </Box>
                <Box>
                  <TextBox
                    name="bytes"
                    title="Data Consumed "
                    type="text"
                    required
                    value={data.bytes}
                    onChange={(e) => handleDataChange(e)}
                    inputpropvalue={{
                      endAdornment: (
                        <InputAdornment position="start">bytes</InputAdornment>
                      ),
                    }}
                  />
                </Box>
              </Box>
            </Slide>
          )}
          {data.serviceType === 'sms' && (
            <Slide
              direction="right"
              in={data.serviceType === 'sms'}
              mountOnEnter
              unmountOnExit
            >
              <Box
                display="flex"
                flexDirection="column"
                gap={2}
                style={{
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  padding: '15px',
                }}
              >
                <Box>
                  <Typography fontWeight={600}>SMS Service</Typography>
                </Box>
                <Box>
                  <TextBox
                    name="messages"
                    title="Number of messages"
                    type="text"
                    required
                    value={data.messages}
                    onChange={(e) => handleDataChange(e)}
                  />
                </Box>
              </Box>
            </Slide>
          )}
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
              onClick={(e) => onRatingSubmit(e)}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RunBilling;
