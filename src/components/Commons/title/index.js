import { Typography, Box } from '@mui/material';

const Title = ({ IconLeft, title, IconRight }) => {
  return (
    <>
      <Box display="flex" flexDirection="row">
        {IconLeft && (
          <Box>
            <IconLeft />
          </Box>
        )}
        <Box>
          <Typography variant="h6">
            <b>{title}</b>
          </Typography>
        </Box>
        {IconRight && (
          <Box>
            <IconRight />
          </Box>
        )}
      </Box>
    </>
  );
};
export default Title;
