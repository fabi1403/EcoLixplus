terimport { Box, Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import EcoIcon from '@mui/icons-material/EmojiNature';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const benefits = [
  {
    icon: <EcoIcon sx={{ fontSize: 40 }} />,
    title: '🌿 100% Ecológico',
    description: 'Producto natural que mejora la calidad del suelo sin químicos dañinos'
  },
  {
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
    title: '🌾 Mayor Rendimiento',
    description: 'Aumenta la producción de sus cultivos de manera sostenible'
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
    title: '🚚 Entrega a Domicilio',
    description: 'Entrega de nuestro producto a tu hogar o negocio'
  },
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 40 }} />,
    title: '💰 Ahorro Garantizado',
    description: 'Reduzca sus costos de producción mientras cuida el medio ambiente'
  }
];

function Home() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h1" gutterBottom>
                EcoLix+
              </Typography>
              <Typography variant="h2" gutterBottom>
                Nutrimos la tierra, reducimos tus costos
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                Descubra nuestro lixiviado ecológico premium que mejora la calidad de su suelo
                y aumenta el rendimiento de sus cultivos de manera natural y sostenible.
              </Typography>
              {/* Botón eliminado */}
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/ecolix-logo.png"
                alt="EcoLix+"
                sx={{
                  width: '100%',
                  maxWidth: 400,
                  height: 'auto',
                  display: 'block',
                  margin: 'auto'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Beneficios de EcoLix+
        </Typography>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                <Box sx={{ color: 'primary.main', mb: 2 }}>{benefit.icon}</Box>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Sección de productos */}
      <Container maxWidth="lg" sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Productos
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
              <Typography variant="h5" gutterBottom>LIXIVIADO 🌱</Typography>
              <Box
                component="img"
                src="/lixi.png"
                alt="Lixiviado"
                sx={{
                  width: '100%',
                  maxWidth: 200,
                  height: 'auto',
                  my: 2
                }}
              />
              <Typography variant="body1" color="text.secondary" gutterBottom>Contiene Calcio 🦴</Typography>
              <Typography variant="h6" gutterBottom>$4.99</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/store')}
                fullWidth
              >
                Comprar Ahora
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
              <Typography variant="h5" gutterBottom>LIXIVIADO  ⚪</Typography>
              <Box
                component="img"
                src="/blanco.png"
                alt="Lixiviado EcoLix+"
                sx={{
                  width: '100%',
                  maxWidth: 200,
                  height: 'auto',
                  my: 2
                }}
              />
              <Typography variant="body1" color="text.secondary" gutterBottom>Contiene Nitrógeno 🌿</Typography>
              <Typography variant="h6" gutterBottom>$4.99</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/store')}
                fullWidth
              >
                Comprar Ahora
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
              <Typography variant="h5" gutterBottom>LIXIVIADO💜</Typography>
              <Box
                component="img"
                src="/morado.png"
                alt="Lixiviado EcoLix+"
                sx={{
                  width: '100%',
                  maxWidth: 200,
                  height: 'auto',
                  my: 2
                }}
              />
              <Typography variant="body1" color="text.secondary" gutterBottom>Contiene Potasio 🌺</Typography>
              <Typography variant="h6" gutterBottom>$4.99</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/store')}
                fullWidth
              >
                Comprar Ahora
              </Button>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
              <Typography variant="h5" gutterBottom>LIXIVIADO 💙</Typography>
              <Box
                component="img"
                src="/azul.png"
                alt="Lixiviado EcoLix+"
                sx={{
                  width: '100%',
                  maxWidth: 200,
                  height: 'auto',
                  my: 2
                }}
              />
              <Typography variant="body1" color="text.secondary" gutterBottom>Contiene Fósforo 🌟</Typography>
              <Typography variant="h6" gutterBottom>$4.99</Typography>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate('/store')}
                fullWidth
              >
                Comprar Ahora
              </Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
