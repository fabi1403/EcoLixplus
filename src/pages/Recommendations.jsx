import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import EcoIcon from '@mui/icons-material/EmojiNature';
import PestControlIcon from '@mui/icons-material/PestControl';
import SavingsIcon from '@mui/icons-material/Savings';

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
              <Card
                sx={{
                  height: '100%',
                  bgcolor: 'background.paper',
                  color: 'text.primary'
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ color: 'secondary.main', mr: 2 }}>
                      {recommendation.icon}
                    </Box>
                    <Typography variant="h5" component="div">
                      {recommendation.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {recommendation.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {recommendation.benefit}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {recommendation.emoji}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Recommendations;