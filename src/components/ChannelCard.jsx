import { Box, Typography, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
const ChannelCard = ({ channel, marginTop }) => {
  return (
    <Box
      sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px' },
        margin: 'auto',
        height: '326',
        marginTop,
      }}
    >
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#FFF',
          }}
        >
          <CardMedia
            image={channel?.snippet?.thumbnails?.high.url || demoProfilePicture}
            alt={channel?.snippet?.title}
            sx={{
              borderRadius: '50%',
              height: 180,
              width: 180,
              mb: 2,
              border: '1px solid #e3e3e3',
            }}
          />

          <Typography variant="h6" color="#FFF">
            {channel?.snippet?.title}
            <CheckCircle
              sx={{ marginLeft: '5px', color: 'gray', fontSize: 14 }}
            />
          </Typography>
          {channel?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{' '}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
