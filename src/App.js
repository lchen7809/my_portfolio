import React from 'react';
import './App.css'; 
import { Card, CardContent, Button, Typography, Container, Grid, AppBar, Toolbar } from '@mui/material';


const projects = [
  { title: 'Travel Magazine', description: 'Year 1 project using HTML, CSS, and template for home page.', link: 'https://lchen7809.github.io/Static-Web-Travel-Magazine-/' },
  { title: 'E Learning Platform', description: 'Online E-learning platform. This takes a while to load.', link: 'https://elearning-f2dw.onrender.com/' },
  { title: 'Weather App', description: 'Multi-functional weather app. Developed with React Native.', link: 'https://snack.expo.dev/@chenleyi7809/weatherapp' },
];

function App() {
  return (
    <div className="App">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" aria-label="Portfolio Title">
            My Portfolio
          </Typography>
        </Toolbar>
      </AppBar>

      <Container>
        <section className="hero-section" aria-labelledby="hero-title" style={{ marginTop: '2rem' }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography id="hero-title" variant="h4" component="h1" gutterBottom>
                Hello, I'm Leyi!
              </Typography>
              <Typography variant="body1" aria-label="Short intro" gutterBottom>
                A passionate software developer with a focus on UI/UX and web accessibility.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} style={{ textAlign: 'center' }}>
              <img 
                src="../public/dp.jpg" 
                alt="profile picture" 
                className="profile-photo" 
                style={{ borderRadius: '50%', width: '200px', height: '200px' }} 
              />
            </Grid>
          </Grid>
        </section>

        <section className="projects-section" aria-labelledby="projects-title" style={{ marginTop: '3rem' }}>
          <Typography id="projects-title" variant="h5" component="h2" gutterBottom>
            My Projects
          </Typography>
          <Grid container spacing={3} role="list">
            {projects.map((project, index) => (
              <Grid item xs={12} md={4} key={index} role="listitem">
                <Card variant="outlined" role="region" aria-labelledby={`project-title-${index}`} tabIndex={0}>
                  <CardContent>
                    <Typography id={`project-title-${index}`} variant="h6" component="h3">
                      {project.title}
                    </Typography>
                    <Typography variant="body2" aria-label={`Description of ${project.title}`}>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    href={project.link} 
                    aria-label={`View details about ${project.title}`}>
                    View Project
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>
      </Container>

      {/* Footer */}
      <footer style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', textAlign: 'center' }}>
        <Typography variant="body2" aria-label="footer content">
          {/* &copy; 2024 [Your Name] - All Rights Reserved */}
        </Typography>
      </footer>
    </div>
  );
}

export default App;
