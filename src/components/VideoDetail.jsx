import { Typography, Stack, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { CheckCircle } from '@mui/icons-material';
import { Videos } from './';
import { fetchFromApi } from '../utils/fetchFromApi';
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?id=${id}&part=snippet,statistics`).then((data) => {
      setVideoDetail(data.items[0]);
      fetchFromApi(
        `search?part=snippet&relatedToVideoId=${id}&type=video}`,
      ).then((data) => {
        setRelatedVideos(data.items);
      });
    });
  }, [id]);
  if (!videoDetail?.snippet) return 'Loading ...';
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', top: '85px', position: 'sticky' }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography variant="h5" color="#FFF" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: '#FFF' }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: 'subtitle1', md: 'h6' }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 2, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={relatedVideos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
