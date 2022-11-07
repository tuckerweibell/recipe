import React from 'react';
import {Box, Button, Link, Stack} from '@mui/material';
import packageJson from '../../../package.json';
import ezcaterLogo from '../../../public/ezcater-logo.svg';
import {ezTheme} from '../../../src/themes';
import GitHubLink from './GitHubLink';
import HeroDivider from './HeroDivider';
import HeroImage from './HeroImage';
import IntroSubheader from './IntroSubheader';
import RecipeLogo from './RecipeLogo';
import RecipeContributor from './RecipeContributor';

const Intro = () => {
  return (
    <Stack
      bgcolor={ezTheme.palette.common.primary120}
      height="100vh"
      overflow="hidden"
      position="relative"
    >
      <HeroImage displaySizeHide="xs" displaySizeShow="md" objectPosition="30% center" />

      <Stack
        bgcolor={ezTheme.palette.common.primary120}
        justifyContent="center"
        minHeight="100vh"
        minWidth={{xs: '34rem', lg: '56rem'}}
        position="relative"
        px="2rem"
        py="5rem"
        width="60%"
      >
        <HeroDivider />

        <Box position="relative" width="100%">
          <Box mx="0" maxWidth="none" pt="0" pb="4rem" px="1.5rem">
            <Stack
              alignItems="center"
              direction="row"
              flexGrow="1"
              justifyContent="space-between"
              pb="4rem"
            >
              <RecipeLogo />
              <GitHubLink />
            </Stack>

            <Stack>
              <IntroSubheader href="/changelog">Latest: v{packageJson.version}</IntroSubheader>

              <Stack fontSize="3rem" fontWeight="700" lineHeight="1.25" mt={3}>
                <Box color={ezTheme.palette.common.white}>Delicious UI components,</Box>

                <Stack direction="row" alignItems="center">
                  <Box color={ezTheme.palette.common.green} mr={2}>
                    from
                  </Box>
                  <Box component="img" src={ezcaterLogo} alt="ezcater" height="3rem" />
                </Stack>

                <Box
                  color={ezTheme.palette.common.neutral120}
                  fontSize="1.5rem"
                  fontWeight="300"
                  mt={1}
                >
                  Fully responsive React components that provide the building blocks you need to
                  build pages faster.
                </Box>

                <Stack direction={{xs: 'column', md: 'row'}} mt={2} spacing={3}>
                  <Button
                    variant="contained"
                    size="large"
                    component={Link}
                    href="/guides/getting-started"
                  >
                    Getting Started
                  </Button>

                  <Button variant="contained" size="large" component={Link} href="/components">
                    Explore the components
                  </Button>
                </Stack>
              </Stack>

              <Stack mt={10} spacing={2}>
                <IntroSubheader>Designed and developed by</IntroSubheader>

                <Stack direction="row" spacing={2}>
                  <RecipeContributor
                    href="https://github.com/danidewitt"
                    imgSrc="/dani-dewitt.jpg"
                    name="Dani Dewitt"
                    role="Recipe Developer"
                  />

                  <RecipeContributor
                    href="https://github.com/noranda"
                    imgSrc="/noranda-brown.jpg"
                    name="Noranda Brown"
                    role="Recipe Developer"
                  />

                  <RecipeContributor
                    href="https://www.linkedin.com/in/joanhojberg/"
                    imgSrc="/joan-hojberg.jpg"
                    name="Joan Højberg"
                    role="Recipe Designer"
                  />

                  <RecipeContributor
                    href="https://github.com/ktlnux"
                    imgSrc="/kaitlyn-brown.jpg"
                    name="Kaitlyn Brown"
                    role="Recipe Designer"
                  />
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>

      <Box position="relative" mt={2} height="16rem" overflow="hidden" width="100%">
        <HeroImage objectPosition="30% center" />
      </Box>
    </Stack>
  );
};

export default Intro;
