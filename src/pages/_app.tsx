import { Container, List, Sidebar } from "@/styles/Pages/app";
import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import Heart from "../assets/Heart.svg";
import Food from "../assets/Food.svg";
import HeartActive from "../assets/HeartActive.svg";
import Home from "../assets/Home.svg";
import HomeActive from "../assets/HomeActive.svg";
import Pet from "../assets/Pet.svg";
import Flower from "../assets/Flower.svg";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Container>
      <Sidebar>
        <h1>
          my<span>products</span>
        </h1>
        <ul>
          <List active={router.pathname == "/" ? true : false}>
            <Link href='/'>
              <Image src={router.pathname == "/" ? HomeActive : Home} alt='' />{" "}
              Home
            </Link>
          </List>
          <p>Categories</p>
          <List active={router.pathname == "/healty" ? true : false}>
            <Link href='/healty'>
              <Image
                src={router.pathname == "/healty" ? HeartActive : Heart}
                alt=''
              />{" "}
              Health
            </Link>
          </List>
          <List disabled={true}>
            <Link href=''>
              <Image src={Food} alt='' /> Food
            </Link>
          </List>
          <List disabled={true}>
            <Link href=''>
              <Image src={Pet} alt='' /> Pet
            </Link>
          </List>
          <List disabled={true}>
            <Link href=''>
              <Image src={Flower} alt='' />
              Flowers
            </Link>
          </List>
        </ul>
      </Sidebar>
      <Component {...pageProps} />
    </Container>
  );
}
