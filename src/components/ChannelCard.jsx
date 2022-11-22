import { Box, Typography, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
const ChannelCard = ({ channel }) => {
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: 20 }}>
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
            sx={{ borderRadius: '50%', height: 180, width: 180 }}
          />

          <Typography variant="subtitle2" color="#FFF">
            <CheckCircle sx={{ marginLeft: 5, color: '#FFF', fontSize: 15 }} />
          </Typography>
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
