import React from 'react';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import TargetIcon from '@mui/icons-material/TrackChanges';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const About = () => {
  const objectives = [
    {
      text: 'Provide a seamless platform for users to find and purchase books at the lowest price online.',
      icon: <SpeedIcon color="primary" />,
    },
    {
      text: 'Offer digital scanning and PDF conversion services to help users build personal digital libraries.',
      icon: <LibraryBooksIcon color="primary" />,
    },
    {
      text: 'Integrate multiple book-related APIs to enrich user data.',
      icon: <IntegrationInstructionsIcon color="primary" />,
    },
    {
      text: 'Enable users to receive an estimated cost for scanning based on page count.',
      icon: <SecurityIcon color="primary" />,
    },
    {
      text: 'Create a user-friendly digital experience that simplifies book access and ownership.',
      icon: <TargetIcon color="primary" />,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          About BookByte
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Paper sx={{ p: 4, mb: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Mission
            </Typography>
            <Typography variant="body1" paragraph>
              BookByte is an innovative platform that allows users to search for books and compare prices from different online stores using APIs such as Google Books and Amazon. Once a book is selected, users can send it to be scanned and converted into a digital format (PDF), similar to services like 1DollarScan, but enhanced with price comparison features and an automated quote system.
            </Typography>
            <Typography variant="body1" paragraph>
              This web-based app aims to improve digital access to books and streamline the book-buying and digitizing experience.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Goals and Objectives
            </Typography>
            <List>
              {objectives.map((objective, index) => (
                <ListItem key={index} sx={{ py: 2 }}>
                  <ListItemIcon>
                    {objective.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={objective.text}
                    sx={{ '& .MuiListItemText-primary': { fontSize: '1.1rem' } }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About; 