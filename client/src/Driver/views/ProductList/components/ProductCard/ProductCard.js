import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import { GiPriceTag,GiShoppingCart } from 'react-icons/gi';
import {MdShoppingCart} from 'react-icons/md';
const useStyles = makeStyles(theme => ({
  root: {},
  imageContainer: {
    height: 64,
    width: 64,
    margin: '0 auto',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: '100%'
  },
  statsItem: {
    display: 'flex',
    alignItems: 'center'
  },
  statsIcon: {
    color: theme.palette.icon,
    marginRight: theme.spacing(1)
  }
}));

const ProductCard = props => {
  const { className, product, ...rest } = props;

  const classes = useStyles();

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent>
        <div className={classes.imageContainer}>
          <img
            alt="Product"
            className={classes.image}
            src={product.imageUrl}
          />
        </div>
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {product.description}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions>
        <Grid
          container
          justify="space-between"
        >
          <Grid
            className={classes.statsItem}
            item xs={12} md={12}
          >
            <GiPriceTag className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
             <span style={{fontWeight:"bold"}}> Price:</span> {product.Price}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item xs={12} md={12}
          >
            <GiShoppingCart className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
               <span style={{fontWeight:"bold"}}> Category:</span> {product.Category}
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item xs={12} md={12}
          >
            <MdShoppingCart className={classes.statsIcon} />
            <Typography
              display="inline"
              variant="body2"
            >
               <span style={{fontWeight:"bold"}}> Sub-Category:</span> {product.SubCategory}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
