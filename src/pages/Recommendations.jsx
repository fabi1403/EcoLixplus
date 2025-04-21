import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import EcoIcon from '@mui/icons-material/EmojiNature';
import PestControlIcon from '@mui/icons-material/PestControl';
import SavingsIcon from '@mui/icons-material/Savings';
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
    ? 'linear-gradient(135deg, #2c5e1a 0%, #1a472e 100%)'
    : index === 1
    ? 'linear-gradient(135deg, #4a1c1a 0%, #3d1515 100%)'
    : 'linear-gradient(135deg, #1a3a4a 0%, #142c3b 100%)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.4)',
    '& .MuiCardContent-root': {
      background: 'rgba(255,255,255,0.05)'
    }
  }
}));

const recommendations = [
  {
    icon: <EcoIcon sx={{ fontSize: 60 }} />,
    title: 'Sostenibilidad y Salud del Suelo',
    description: 'Usa lixiviado ecológico para nutrir tus tierras de manera natural. Este producto a base de microorganismos mejora la estructura del suelo, aumenta su capacidad de retención de agua y nutrientes, y promueve un ecosistema más saludable para tus cultivos. ¡Es como darle un respiro al suelo!',
    benefit: 'Suelo más saludable = cultivos más fuertes',
    emoji: '🌱 🌍'
  },
  {
    icon: <PestControlIcon sx={{ fontSize: 60 }} />,
    title: 'Resistencia Natural a Plagas',
    description: 'Di adiós a los químicos agresivos y hola a un producto que protege tus plantas de manera natural. El lixiviado hace que las plantas sean más resistentes a plagas y enfermedades, lo que te permitirá reducir el uso de pesticidas. ¡Menos químicos, más naturaleza!',
    benefit: 'Menos pesticidas, más salud para tus cultivos',
    emoji: '🐞 🦠'
  },
  {
    icon: <SavingsIcon sx={{ fontSize: 60 }} />,
    title: 'Ahorro y Rentabilidad',
    description: 'Vender tu producto a un precio más accesible no significa comprometer calidad. El lixiviado ecológico es una alternativa económica que no solo reduce tus costos de producción, sino que también puede aumentar la rentabilidad. ¡Es la solución que te ahorra dinero y cuida tu bolsillo!',
    benefit: 'Menores costos de producción = mayores ganancias',
    emoji: '💸 💰'
  }
];

function Recommendations() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Recomendaciones para el Uso de EcoLix+
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {recommendations.map((recommendation, index) => (
            <Grid item xs={12} key={index}>
              <AnimatedCard index={index}>
                <CardContent sx={{
                  transition: 'background 0.3s ease',
                  borderRadius: 1,
                  '& .MuiTypography-root': {
                    color: 'white',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                  }
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'primary.main', mr: 2, transform: 'scale(1)', transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.2)' } }}>
                      {recommendation.icon}
                    </Box>
                    <Typography variant="h5" component="div">
                      {recommendation.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.primary', mt: 2, opacity: 0.9 }}>
                    {recommendation.description}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2, color: 'text.primary', fontWeight: 'bold', opacity: 0.9 }}>
                    {recommendation.benefit}
                  </Typography>
                  <Typography variant="h5" sx={{ mt: 2, textAlign: 'center', opacity: 0.9 }}>
                    {recommendation.emoji}
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