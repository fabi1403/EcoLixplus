import { Box, Container, Typography } from '@mui/material';

function Resources() {
  return (
    <Box sx={{ py: 8, background: 'linear-gradient(135deg, #262871, #007533)' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>🎓🌿 Nuestro proyecto de emprendimiento: EcoLix+</Typography>
        <Box component="img" src="/img4.png" alt="Leaf" sx={{ width: { xs: '100%', md: '50%' }, height: 'auto', display: 'block', margin: 'auto' }} />
        <Typography variant="body1" paragraph>Estamos desarrollando un proyecto de emprendimiento basado en la producción de lixiviado ecológico ♻️, un fertilizante natural que beneficia la agricultura sostenible. Este proyecto lo estamos llevando a cabo junto a la Unidad Educativa General Eloy Alfaro, como parte de un concurso estudiantil 🏆.</Typography>
        <Typography variant="body1" paragraph>Nuestro colegio cuenta con la maquinaria adecuada para realizar este proceso agroecológico 🚜, lo que nos permite producir lixiviado de alta calidad. Además, somos nosotros, los estudiantes, quienes participamos activamente en cada etapa del proceso, aportando nuestra mano de obra, esfuerzo y compromiso 💪👩‍🌾👨‍🌾.</Typography>
        <Typography variant="body1" paragraph>Este emprendimiento no solo busca ofrecer una alternativa más saludable y económica para los agricultores, sino también promover el cuidado del medio ambiente y la formación práctica de los jóvenes 🌱🌎.</Typography>
      </Container>
    </Box>
  );
}

export default Resources;