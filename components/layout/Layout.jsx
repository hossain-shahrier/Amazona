import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Head from "next/head";
import NextLink from "next/link";
import React from "react";
// Styles
import useStyles from "../../utils/styles";
export default function Layout({ title, children, description }) {
  const theme = createMuiTheme({
    h1: {
      fontSize: "1.6rem",
      fontWeight: 400,
      margin: "1rem 0",
    },
    h2: {
      fontSize: "1.4rem",
      fontWeight: 400,
      margin: "1rem 0",
    },
    body1: {
      fontWeight: "normal",
    },
    palatte: {
      type: "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#2181e2",
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Amazona` : "Next Amazona"}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <NextLink href="/" passHref>
              <Link>
                <Typography className={classes.brand}>Amazona</Typography>
              </Link>
            </NextLink>
            <div className={classes.grow}></div>
            <div>
              <NextLink href="/cart" passHref>
                <Link>Cart</Link>
              </NextLink>
              <NextLink href="/login" passHref>
                <Link>Login</Link>
              </NextLink>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved to Shahrier Hossain</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
