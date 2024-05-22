import { ContentContainer } from '@components/ContentContainer';
import Box from '@mui/material/Grid';

export default async function Home() {
  return (
    <Box
      container
      style={{
        backgroundColor: '#f9f6fc',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ContentContainer />
    </Box>
  );
}
