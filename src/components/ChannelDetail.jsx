import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import { fetchFromApi } from '../utils/fetchFromApi';
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      },
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      <div
        style={{
          background:
            'radial-gradient(circle, rgba(63,94,251,1) 34%, rgba(252,70,107,1) 97%)',
          height: '300px',
          zIndex: 10,
        }}
      />
      <ChannelCard channel={channelDetail} marginTop="-120px" />

      <Box sx={{ display: 'flex', p: '2' }}>
        <Box sx={{ mr: { sm: '100px' } }} />

        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
