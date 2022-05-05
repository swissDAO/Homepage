import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

import { SiDiscord } from "react-icons/si";

export default function LandingPageHero() {
    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
  
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 20, md: 36 }}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
                The First DAO <br />
              <Text as={'span'} color={'red.400'}>
                for Switzerland
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              Connect with other developers, blockchain enthusiasts, web3 newcomers and shape the Web3 and Blockchain Space in Switzerland.
            </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
            <Button leftIcon={<SiDiscord />} color='#5865F2' variant='outline' colorScheme='whiteAlpha' size='md'>
                Join Discord
            </Button>
              

            </Stack>
          </Stack>
        </Container>
      </>
    );
  }
  