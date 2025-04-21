import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const AnimatedEmoji = styled('span')(({ delay = 0 }) => ({
  display: 'inline-block',
  animation: `${float} 3s ease-in-out infinite`,
  animationDelay: `${delay}s`,
}));

const GradientBackground = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #262871, #007533)',
  transition: 'background 0.3s ease-in-out',
  '&:hover': {
    background: 'linear-gradient(135deg, #007533, #262871)',
  },
}));

function Resources() {
  return (
    <GradientBackground sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          <AnimatedEmoji delay={0}>🎓</AnimatedEmoji>
          <AnimatedEmoji delay={0.5}>🌿</AnimatedEmoji>
          {' Nuestro proyecto de emprendimiento: EcoLix+'}
        </Typography>
        <Box 
          component="img" 
          src="/img4.png" 
          alt="Leaf" 
          sx={{ 
            width: { xs: '100%', md: '50%' }, 
            height: 'auto', 
            display: 'block', 
            margin: 'auto',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }} 
        />
        <Typography variant="body1" paragraph>
          Estamos desarrollando un proyecto de emprendimiento basado en la producción de lixiviado ecológico <AnimatedEmoji>♻️</AnimatedEmoji>, 
          un fertilizante natural que beneficia la agricultura sostenible. Este proyecto lo estamos llevando a cabo junto a 
          la Unidad Educativa General Eloy Alfaro, como parte de un concurso estudiantil <AnimatedEmoji delay={0.3}>🏆</AnimatedEmoji>.
        </Typography>
        <Typography variant="body1" paragraph>
          Nuestro colegio cuenta con la maquinaria adecuada para realizar este proceso agroecológico <AnimatedEmoji delay={0.6}>🚜</AnimatedEmoji>, 
          lo que nos permite producir lixiviado de alta calidad. Además, somos nosotros, los estudiantes, quienes participamos 
          activamente en cada etapa del proceso, aportando nuestra mano de obra, esfuerzo y compromiso 
          <AnimatedEmoji delay={0.9}>💪</AnimatedEmoji><AnimatedEmoji delay={1.2}>👩‍🌾</AnimatedEmoji><AnimatedEmoji delay={1.5}>👨‍🌾</AnimatedEmoji>.
        </Typography>
        <Typography variant="body1" paragraph>
          Este emprendimiento no solo busca ofrecer una alternativa más saludable y económica para los agricultores, 
          sino también promover el cuidado del medio ambiente y la formación práctica de los jóvenes 
          <AnimatedEmoji delay={1.8}>🌱</AnimatedEmoji><AnimatedEmoji delay={2.1}>🌎</AnimatedEmoji>.
        </Typography>
      </Container>
    </GradientBackground>
  );
}

export default Resources;