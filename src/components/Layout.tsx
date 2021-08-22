import { Box, Grid } from '@chakra-ui/layout';
import { BoxProps, GridProps, Container } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import Navigation from './Navigation';

enum LayoutVariant {
  scrollable = 'scrollable', // Default. Page is scrollable.
  fullPage = 'fullPage', // Layout, including the footer, covers the screen height.
  fullContent = 'fullContent', // The header and content will cover the screen height. User must scroll to see the header.
}

interface MetaProps {
  url: string;
  title: string;
  description: string;
  image: string;
}

interface LayoutProps {
  pageTitle?: string;
  head?: JSX.Element;
  variant?: `${LayoutVariant}`;
  gridProps?: GridProps;
  mainProps?: BoxProps;
  hideNavButtons?: boolean | 'header' | 'footer';
  hideLogin?: boolean;
  affixTitle?: boolean;
  container?: boolean;
  metadata?: Partial<MetaProps>;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  pageTitle = '',
  head,
  variant = LayoutVariant.scrollable,
  gridProps,
  mainProps,
  hideNavButtons,
  hideLogin,
  affixTitle = true,
  container = false,
  // TODO: Add option to setup default metadata
  metadata = {},
}) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(
      `${pageTitle}${affixTitle && pageTitle ? ' | ' : ''}${
        affixTitle ? 'Dami mong alam!' : ''
      }`
    );
  }, [affixTitle, pageTitle]);

  const Wrapper = !container ? Box : Container;

  return (
    <>
      <Navigation
        zIndex="sticky"
        hideNav={hideNavButtons === true || hideNavButtons === 'header'}
        hideLogin={hideLogin}
      />
      <Grid
        gridTemplateRows={LayoutVariant.scrollable ? 'auto auto' : '1fr auto'}
        overflow={variant === LayoutVariant.fullPage ? 'hidden' : 'inherit'}
        {...gridProps}
      >
        <Wrapper
          as="main"
          h={
            variant === LayoutVariant.fullContent
              ? 'calc(100vh - 88px)'
              : 'full'
          }
          maxW={container && 'container.xl'}
          {...mainProps}
        >
          <Head>
            {head || (
              <>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
              </>
            )}
            {Object.entries(metadata).map(([key, value]) => (
              <meta property={`og:${key}`} key={`og:${key}`} content={value} />
            ))}
          </Head>
          {children}
        </Wrapper>
        {/* {variant !== LayoutVariant.fullContent && (
          <Footer
            hideNav={hideNavButtons === true || hideNavButtons === 'footer'}
          />
        )} */}
      </Grid>
      {/* {variant === LayoutVariant.fullContent && (
        <Footer
          hideNav={hideNavButtons === true || hideNavButtons === 'footer'}
        />
      )} */}
    </>
  );
};

export default Layout;
