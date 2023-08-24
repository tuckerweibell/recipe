import React, {FC} from 'react';
import {Box, Stack} from '@mui/material';
import {Unstyled} from '@storybook/blocks';
import {linkTo} from '@storybook/addon-links';
import packageJson from '../../../package.json';
import ezcaterLogo from '../../../public/images/ezcater-logo.svg';
import {ezTheme} from '../../../src/themes';
import {EzButton} from '../../../src/components';
import FullBleed from '../FullBleed';
import GitHubLink from './GitHubLink';
import HeroDivider from './HeroDivider';
import HeroImage from './HeroImage';
import WelcomeSubheader from './WelcomeSubheader';
import RecipeLogo from './RecipeLogo';
import RecipeContributor from './RecipeContributor';

const Welcome: FC<unknown> = () => (
  <FullBleed>
    <Stack bgcolor={ezTheme.palette.common.green120} overflow="hidden">
      <Unstyled>
        <HeroImage displaySizeHide="xs" displaySizeShow="md" objectPosition="30% center" />

        <Stack
          bgcolor={ezTheme.palette.common.green120}
          justifyContent="center"
          minHeight="100vh"
          minWidth={{xs: '34rem', lg: '56rem'}}
          position="relative"
          px="2rem"
          py="5rem"
          width="60%"
        >
          <HeroDivider />

          <Box position="relative" width="100%" height="100%">
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
                <WelcomeSubheader onClick={linkTo('Guides/Changelog')}>
                  Latest: v{packageJson.version}
                </WelcomeSubheader>

                <Stack fontFamily="Montserrat" fontWeight="700" lineHeight="1.25" mt={3}>
                  <Box color={ezTheme.palette.common.white} fontSize="3rem">
                    Delicious UI components,
                  </Box>

                  <Stack direction="row" alignItems="center">
                    <Box color={ezTheme.palette.common.green100} fontSize="3rem" mr={2}>
                      from
                    </Box>
                    <Box component="img" src={ezcaterLogo} alt="ezcater" height="3rem" />
                  </Stack>

                  <Box
                    color={ezTheme.palette.common.grey120}
                    fontSize="1.5rem"
                    fontWeight="300"
                    mt={1}
                  >
                    Fully responsive React components that provide the building blocks you need to
                    build pages faster.
                  </Box>

                  <Stack direction={{xs: 'column', md: 'row'}} mt={2} gap={3}>
                    <EzButton
                      color="common.green100"
                      onClick={linkTo('Guides/Getting Started')}
                      size="large"
                    >
                      Getting Started
                    </EzButton>

                    <EzButton
                      color="common.green100"
                      onClick={linkTo('Component Library')}
                      size="large"
                    >
                      Explore the components
                    </EzButton>
                  </Stack>
                </Stack>

                <Stack mt={10} gap={2}>
                  <WelcomeSubheader>Designed and developed by</WelcomeSubheader>

                  <Stack direction="row" gap={2} flexWrap="wrap">
                    <RecipeContributor
                      href="https://www.linkedin.com/in/alexisvalexander/"
                      imgSrc="/images/alexis-alexander.jpg"
                      name="Alexis Alexander"
                      role="Recipe Designer"
                    />

                    <RecipeContributor
                      href="https://www.linkedin.com/in/marthabergmann/"
                      imgSrc="/images/martha-bergmann.jpg"
                      name="Martha Bergmann"
                      role="Recipe Designer"
                    />

                    <RecipeContributor
                      href="https://github.com/noranda"
                      imgSrc="/images/noranda-brown.jpg"
                      name="Noranda Brown"
                      role="Recipe Developer"
                    />

                    <RecipeContributor
                      href="https://github.com/danidewitt"
                      imgSrc="/images/dani-dewitt.jpg"
                      name="Dani Dewitt"
                      role="Recipe Developer"
                    />

                    <RecipeContributor
                      href="https://www.linkedin.com/in/carlidottore/"
                      imgSrc="/images/carli-dottore.jpg"
                      name="Carli Dottore"
                      role="Recipe Designer"
                    />

                    <RecipeContributor
                      href="https://www.linkedin.com/in/catguido/"
                      imgSrc="/images/cat-guido.jpg"
                      name="Cat Guido"
                      role="Recipe Designer"
                    />

                    <RecipeContributor
                      href="https://www.linkedin.com/in/wendyrhawkins/"
                      imgSrc="/images/wendy-hawkins.jpg"
                      name="Wendy Hawkins"
                      role="Recipe Designer"
                    />

                    <RecipeContributor
                      href="https://www.linkedin.com/in/joanhojberg/"
                      imgSrc="/images/joan-hojberg.jpg"
                      name="Joan Højberg"
                      role="Recipe Designer"
                    />

                    <RecipeContributor
                      href="https://www.linkedin.com/in/smvjones/"
                      imgSrc="/images/shawn-jones.jpg"
                      name="Shawn Jones"
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
      </Unstyled>
    </Stack>
  </FullBleed>
);

export default Welcome;
