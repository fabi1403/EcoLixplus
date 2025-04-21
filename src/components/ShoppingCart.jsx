import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Grid,
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const products = [
  {
    id: 1,
    name: 'Lixiviado EcoLix+',
    price: 9.99,
    image: '/lixi.png',
    description: 'Lixiviado ecológico premium para mejorar la calidad del suelo',
    unit: 'litro'
  }
];

function ShoppingCart({ onProceedToCheckout }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.map(item =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Productos Disponibles
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{ objectFit: 'contain', p: 2 }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  ${product.price.toFixed(2)} / {product.unit}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<ShoppingCartIcon />}
                  onClick={() => addToCart(product)}
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Agregar al Carrito
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {cart.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Carrito de Compras
          </Typography>
          <Card sx={{ mb: 3 }}>
            {cart.map((item) => (
              <Box key={item.id} sx={{ p: 2 }}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={3}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: '100%', maxWidth: '80px', height: 'auto' }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="subtitle1">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${item.price.toFixed(2)} / {item.unit}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton
                        size="small"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <RemoveIcon />
                      </IconButton>
                      <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                      <IconButton
                        size="small"
                        onClick={() => addToCart(item)}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography variant="subtitle1" align="right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 2 }} />
              </Box>
            ))}
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" align="right">
                Total: ${calculateTotal().toFixed(2)}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => onProceedToCheckout(cart, calculateTotal())}
              >
                Proceder al Pago
              </Button>
            </Box>
          </Card>
        </Box>
      )}
    </Box>
  );
}

export default ShoppingCart;