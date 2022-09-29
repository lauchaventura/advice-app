import {Box, Center, Text, Button, Image} from "@chakra-ui/react";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const url = "https://api.adviceslip.com/advice";
  const [advice, setAdvice] = useState([]);
  const obtenerDatos = async () => {
    const data = await fetch(url);
    const users = await data.json();
    setAdvice(users.slip);
    console.log(users.slip);
  };
  useEffect(() => {
    obtenerDatos();
  }, []);
  return (
    <>
      <Head>
        <title>AdviceAPP</title>
      </Head>
      <Box
        bg='darkblue'
        h='calc(100vh - 0.1px)'
        alignItems='center'
        align='center'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        p={[4, 2, 0, 0]}
      >
        <Box>
          <Box
            p={8}
            maxW='480px'
            position='relative'
            borderRadius='lg'
            bg='darkgrayishblue'
          >
            <Center align='center' display='inline-block'>
              <Text
                fontWeight='bold'
                letterSpacing={4}
                color='neongreen'
                fontSize='10px'
                pb={4}
              >
                ADVICE #{advice.id}
              </Text>
              <Text
                fontSize='18px'
                fontWeight='bold'
                display='block'
                color='lightcyan'
              >
                "{advice.advice}"
              </Text>
              <Image pt={6} pb={5} src='./images/pattern-divider-desktop.svg' />
            </Center>
            <Box>
              <Button
                border='none'
                position='absolute'
                left='50%'
                p={2}
                bottom='-1.2rem'
                transform='translateX(-50%)'
                bg='neongreen'
                transition='0.1s all'
                onClick={obtenerDatos}
                borderRadius='50%'
                _hover={{
                  boxShadow: "0px 10px 90px green",
                }}
                _active={{
                  bg: "neongreen",
                }}
              >
                <Image width='17px' src='./images/icon-dice.svg' />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
