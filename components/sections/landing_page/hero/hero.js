import Head from 'next/head';
import {
  Box,
  Heading,
  Container,
  Link,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

import NextLink from "next/link";
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
                The First DAO <br />for  {" "}
              <Text as={'span'} color={'red.500'}>
                 Switzerland 🇨🇭
              </Text>
            </Heading>
            <div></div>
            <div></div>
            <div></div>
            <Text color={'gray.500'} fontSize="xl">
              Connect with other Developers, Blockchain Enthusiasts, Web3 Newcomers and shape the Web3 and Blockchain Space in Switzerland.
            </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
            <Button mt="20" leftIcon={<SiDiscord />} color='#5865F2' variant='outline' colorScheme='whiteAlpha' size='md'>
              <NextLink href="https://discord.gg/yX8dZEvvXB" passHref isExternal>
                <Link target="_blank" rel="noopener noreferrer">Join Discord</Link>
              </NextLink>
            </Button>
              

            </Stack>
          </Stack>
        </Container>
      </>
    );
  }
  