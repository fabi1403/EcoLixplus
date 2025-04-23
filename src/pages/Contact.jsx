import { Box, Container, Typography, Grid, Card, CardContent, Link, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" align="center" gutterBottom>
        🛍️ ¿Interesado en nuestro producto? ¡Contáctanos! 📲
      </Typography>

      <Grid container spacing={4}>
        {/* Información del Producto */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Información del Producto
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6">🔹 Nombre del producto:</Typography>
                <Typography>Lixiviado EcoLix+</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="h6">🔹 Precio:</Typography>
                <Typography>$[9.99]</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocalShippingIcon sx={{ mr: 1 }} />
                <Typography variant="h6">🔹 Entrega:</Typography>
              </Box>
              <Typography>📦 Envíos a todo el país / Entrega local disponible</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Información de Contacto */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Información de Contacto
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <WhatsAppIcon sx={{ mr: 1 }} /> 📞 Teléfono / WhatsApp:
                </Typography>
                <Typography>📲 0987654321 </Typography>
                <Typography variant="body2" color="text.secondary">
                
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <EmailIcon sx={{ mr: 1 }} /> 📧 Correo electrónico:
                </Typography>
                <Typography>✉️ ecolix+@correo.com </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOnIcon sx={{ mr: 1 }} /> 📍 Ubicación:
                </Typography>
                <Typography>📌 Salcedo - Unidad Educativa General Eloy Alfaro</Typography>
              </Box>

              <Typography variant="h6" gutterBottom>📱 Redes sociales:</Typography>
              <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Link href="https://instagram.com/ecolix+" target="_blank" color="inherit">
                  <IconButton>
                    <InstagramIcon /> @ecolix+
                  </IconButton>
                </Link>
                <Link href="https://facebook.com/ecolix+" target="_blank" color="inherit">
                  <IconButton>
                    <FacebookIcon /> ecolix+
                  </IconButton>
                </Link>
                <Link href="https://x.com/ecolix+" target="_blank" color="inherit">
                  <IconButton>
                    <xIcon /> @ecolix+
                  </IconButton>
                </Link>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          ✨ ¿Tienes dudas o quieres hacer tu pedido?
        </Typography>
        <Typography variant="h6">
          ¡Escríbenos y con gusto te ayudamos! 💬
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Gracias por apoyar a pequeños negocios ❤️
        </Typography>
      </Box>
    </Container>
  );
}

export default Contact;
