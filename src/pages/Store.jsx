import React, { useState } from 'react';
import { Box, Container, Typography, Button, TextField, Alert } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DebitCardIcon from '@mui/icons-material/AccountBalanceWallet';
import PayPalIcon from '@mui/icons-material/Payment';
import ApplePayIcon from '@mui/icons-material/Apple';
import GooglePayIcon from '@mui/icons-material/Android';
import BankTransferIcon from '@mui/icons-material/AccountBalance';
import ShoppingCart from '../components/ShoppingCart';

const bankDetails = {
  bankName: 'Banco del Pichincha',
  accountHolder: 'EcoLix+',
  accountNumber: '00000000000000',
  accountType: 'Corriente'
};

function Store() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({});
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleProceedToCheckout = (cartItems, cartTotal) => {
    setCart(cartItems);
    setTotal(cartTotal);
    setShowPaymentForm(true);
  };

  const handlePayment = (method) => {
    setError('');
    setSuccess('');
    setSelectedMethod(method);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const validatePaymentDetails = () => {
    if (selectedMethod === 'Credit Card' || selectedMethod === 'Debit Card') {
      if (!paymentDetails.cardNumber || !paymentDetails.expiryDate || !paymentDetails.cvv) {
        setError('Por favor complete todos los campos de la tarjeta');
        return false;
      }
      if (!/^\d{16}$/.test(paymentDetails.cardNumber)) {
        setError('Número de tarjeta inválido');
        return false;
      }
      if (!/^\d{2}\/\d{2}$/.test(paymentDetails.expiryDate)) {
        setError('Fecha de expiración inválida (MM/YY)');
        return false;
      }
      if (!/^\d{3,4}$/.test(paymentDetails.cvv)) {
        setError('CVV inválido');
        return false;
      }
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validatePaymentDetails()) {
      return;
    }

    // Simulación de procesamiento de pago
    setTimeout(() => {
      setSuccess('¡Pago procesado exitosamente! Recibirás un correo con los detalles de tu compra.');
      setCart([]);
      setTotal(0);
      setPaymentDetails({});
      setSelectedMethod(null);
      setShowPaymentForm(false);
    }, 2000);
  };

  const renderPaymentForm = () => {
    if (!selectedMethod || !showPaymentForm) return null;

    switch (selectedMethod) {
      case 'Credit Card':
      case 'Debit Card':
        return (
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4, width: '100%', maxWidth: 400, mx: 'auto' }}>
            <Typography variant="h6" gutterBottom>Detalles de la Tarjeta</Typography>
            <TextField
              fullWidth
              label="Número de Tarjeta"
              name="cardNumber"
              value={paymentDetails.cardNumber || ''}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Fecha de Expiración (MM/YY)"
              name="expiryDate"
              value={paymentDetails.expiryDate || ''}
              onChange={handleInputChange}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="CVV"
              name="cvv"
              value={paymentDetails.cvv || ''}
              onChange={handleInputChange}
              margin="normal"
              required
              type="password"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
            >
              Pagar ${total.toFixed(2)}
            </Button>
          </Box>
        );

      case 'Bank Transfer':
        return (
          <Box sx={{ mt: 4, width: '100%', maxWidth: 400, mx: 'auto' }}>
            <Typography variant="h6" gutterBottom>Detalles de la Transferencia Bancaria</Typography>
            <Alert severity="info" sx={{ mb: 2 }}>
              Por favor realiza la transferencia a la siguiente cuenta bancaria:
              <br /><br />
              Banco: {bankDetails.bankName}<br />
              Titular: {bankDetails.accountHolder}<br />
              Cuenta: {bankDetails.accountNumber}<br />
              Tipo: {bankDetails.accountType}<br />
              <br />
              Monto a transferir: ${total.toFixed(2)}
            </Alert>
            <Typography variant="body2" color="text.secondary">
              Una vez realizada la transferencia, envía el comprobante a nuestro correo: info@ecolix.com
            </Typography>
          </Box>
        );

      case 'PayPal':
      case 'Apple Pay':
      case 'Google Pay':
        return (
          <Box sx={{ mt: 4, width: '100%', maxWidth: 400, mx: 'auto' }}>
            <Typography variant="h6" gutterBottom>Pago con {selectedMethod}</Typography>
            <Alert severity="info">
              Serás redirigido a la plataforma de pago de {selectedMethod}.
            </Alert>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handleSubmit}
            >
              Continuar con {selectedMethod}
            </Button>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        {!showPaymentForm ? (
          <ShoppingCart onProceedToCheckout={handleProceedToCheckout} />
        ) : (
          <>
            <Typography variant="h4" align="center" gutterBottom>
              Método de Pago
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap', mb: 4 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handlePayment('Credit Card')}
                startIcon={<CreditCardIcon />}
              >
                Tarjeta de Crédito
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handlePayment('Debit Card')}
                startIcon={<DebitCardIcon />}
              >
                Tarjeta de Débito
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handlePayment('PayPal')}
                startIcon={<PayPalIcon />}
              >
                PayPal
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handlePayment('Apple Pay')}
                startIcon={<ApplePayIcon />}
              >
                Apple Pay
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handlePayment('Google Pay')}
                startIcon={<GooglePayIcon />}
              >
                Google Pay
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handlePayment('Bank Transfer')}
                startIcon={<BankTransferIcon />}
              >
                Transferencia Bancaria
              </Button>
            </Box>
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}
            {renderPaymentForm()}
            {showPaymentForm && (
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  setShowPaymentForm(false);
                  setSelectedMethod(null);
                  setError('');
                  setSuccess('');
                }}
                sx={{ mt: 3, display: 'block', mx: 'auto' }}
              >
                Volver al Carrito
              </Button>
            )}
          </>
        )}
      </Container>
    </Box>
  );
}

export default Store;