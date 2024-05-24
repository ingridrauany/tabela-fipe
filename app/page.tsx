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
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <ContentContainer />
    </Box>
  );
}
