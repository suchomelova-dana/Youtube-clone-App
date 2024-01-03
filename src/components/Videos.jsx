import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index"

function Videos({videos, direction}) {

    if(!videos.length) return 'Loading...'
    return (
        <Stack 
            direction={ direction || 'row'} 
            flexWrap="wrap" 
            justifyContent={{ xs: 'center', md:'start'}} 
            gap={2}
        >
            {videos.map((video, index) => 
                <Box key={index}>
                    {video.id.videoId && <VideoCard video={video}/>}
                    {video.id.channelId && <ChannelCard channelDetail={video}/>}
                </Box>
            )}
        </Stack>
    
    )
}

export default Videos