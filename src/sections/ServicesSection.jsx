import { Box, Typography, Card, CardMedia, CardContent } from '@mui/material';

export default function ProductsSection() {

  const products = [{ name: 'Service 1', description: 'Description 1' }, { name: 'Service 2', description: 'Description 2' }];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, p: 5 }}>
            {products.map((product, index) => (
                <Card sx={{ maxWidth: 345 }} key={index}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt={product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};