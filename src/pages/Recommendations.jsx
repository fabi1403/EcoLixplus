import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AnimatedCard = styled(Card)(({ theme, index }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  animation: `${fadeIn} 0.5s ease-out forwards`,
  animationDelay: `${index * 0.2}s`,
  background: index === 0
    ? 'linear-gradient(135deg, #4CAF50 0%, #8BC34A 100%)' // Verde para el problema
    : index === 1
    ? 'linear-gradient(135deg, #FFC107 0%, #FFEB3B 100%)' // Amarillo para la solución
    : index === 2
    ? 'linear-gradient(135deg, #2196F3 0%, #64B5F6 100%)' // Azul para el modelo de negocio
    : index === 3
    ? 'linear-gradient(135deg, #F44336 0%, #E57373 100%)' // Rojo para impacto y escalabilidad
    : 'linear-gradient(135deg, #9C27B0 0%, #BA68C8 100%)', // Morado para el equipo
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
    '& .MuiCardContent-root': {
      background: 'rgba(255,255,255,0.05)'
    }
  }
}));

const slidesData = [
  {
    title: '🌍 El problema',
    text: 'Los fertilizantes químicos son caros, contaminantes y excluyen a muchos pequeños productores. Mientras tanto, toneladas de residuos vegetales se botan cada semana en mercados y plazas… …cuando podrían regenerar la tierra.',
    image: 'https://source.unsplash.com/random?q=environmental+problem&w=600&h=400',
    alt: 'Problema ambiental'
  },
  {
    title: '💡 Nuestra solución: EcolixiPlus',
    text: 'Transformamos residuos urbanos en fertilizante líquido base. Lo fortificamos naturalmente con N, P o K para crear fertilizantes especializados: Ecolixi-N (crecimiento), Ecolixi-P (floración), Ecolixi-K (madurez), Ecolixi-Balance (general).',
    image: 'https://source.unsplash.com/random?q=organic+fertilizer&w=600&h=400',
    alt: 'Solución EcolixiPlus'
  },
  {
    title: '📦 Nuestro modelo',
    text: 'Clientes: Agricultores medianos, Invernaderos, Exportadores, Huertos urbanos. Canales: Distribuidores rurales, Ferias agroecológicas, App móvil, Asociaciones de mujeres.',
    image: 'https://source.unsplash.com/random?q=business+model&w=600&h=400',
    alt: 'Modelo de negocio'
  },
  {
    title: '♻️ Impacto y expansión',
    text: 'Cada litro evita 2-3 kg de basura en el relleno sanitario. Transformamos desechos en productividad. Queremos instalar centros de recolección en mercados urbanos. Escalar a todo el país como fertilizante circular nacional.',
    image: 'https://source.unsplash.com/random?q=environmental+impact&w=600&h=400',
    alt: 'Impacto y expansión'
  },
  {
    title: '👩‍🌾 Nuestro equipo',
    text: 'Somos mujeres emprendedoras que creemos en la tierra y la transformación. EcolixiPlus no es solo un producto: Es una plataforma para empoderar a otras mujeres rurales, generar empleo verde y devolverle valor a lo que otros botan.',
    image: 'https://source.unsplash.com/random?q=women+entrepreneurs&w=600&h=400',
    alt: 'Nuestro equipo'
  }
];

function Recommendations() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Conoce más sobre EcolixiPlus
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {slidesData.map((slide, index) => (
            <Grid item xs={12} md={6} lg={4} key={index + 1}>
              <AnimatedCard index={index}>
                <CardContent sx={{
                  transition: 'background 0.3s ease',
                  borderRadius: 1,
                  '& .MuiTypography-root': {
                    color: 'white',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center'
                }}>
                  <Box
                    component="img"
                    sx={{
                      height: 160,
                      width: '80%',
                      maxHeight: { xs: 200, md: 167 },
                      maxWidth: { xs: 300, md: 250 },
                      mb: 2,
                      borderRadius: 1
                    }}
                    alt={slide.alt}
                    src={slide.image}
                  />
                  <Typography variant="h5" component="div" align="center" gutterBottom>
                    {slide.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.primary', mt: 1, opacity: 0.9, textAlign: 'center' }}>
                    {slide.text}
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

export default Recommendations;
