import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AnimatedCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  animation: `${fadeIn} 0.5s ease-out forwards`,
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
  }
}));

const blogPosts = [
  {
    title: 'Beneficios del Lixiviado en la Agricultura Orgánica',
    date: '15 de Marzo, 2024',
    image: '/ecolix-logo.png',
    description: 'Descubre cómo el lixiviado orgánico puede mejorar la calidad de tus cultivos y promover una agricultura más sostenible. Aprende sobre sus beneficios y aplicaciones prácticas.',
    readTime: '5 min de lectura',
    author: 'Dr. Carlos Mendoza'
  },
  {
    title: 'Guía Completa de Aplicación de Lixiviados',
    date: '10 de Marzo, 2024',
    image: '/OIP.jpg',
    description: 'Una guía paso a paso sobre cómo aplicar correctamente los lixiviados en tus cultivos. Incluye dosificación, frecuencia y mejores prácticas para obtener resultados óptimos.',
    readTime: '7 min de lectura',
    author: 'Ing. María González'
  },
  {
    title: 'Agricultura Sostenible con EcoLix+',
    date: '5 de Marzo, 2024',
    image: '/AG.jpg',
    description: 'Conoce cómo EcoLix+ está transformando la agricultura tradicional en una práctica más sostenible y amigable con el medio ambiente. Casos de éxito y testimonios.',
    readTime: '6 min de lectura',
    author: 'Ing. Juan Pérez'
  },
  {
    title: 'Innovación en Fertilizantes Orgánicos',
    date: '1 de Marzo, 2024',
    image: '/FER.jpg',
    description: 'Las últimas tendencias en fertilizantes orgánicos y cómo el lixiviado está revolucionando la manera en que nutrimos nuestros cultivos. Descubre las innovaciones del sector.',
    readTime: '4 min de lectura',
    author: 'Dra. Ana Martínez'
  }
];

function Resources() {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Blog EcoLix+
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Artículos y recursos sobre agricultura sostenible y el uso de lixiviados
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={6} key={index}>
              <AnimatedCard>
                <CardMedia
                  component="img"
                  height="240"
                  image={post.image}
                  alt={post.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="overline" color="text.secondary">
                    {post.date} · {post.readTime}
                  </Typography>
                  <Typography variant="h5" gutterBottom sx={{ mt: 1 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="subtitle2" color="primary">
                    Por {post.author}
                  </Typography>
                </CardContent>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Resources;