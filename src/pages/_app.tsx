import { config } from "@/styles";
import { Container, List, Sidebar } from "@/styles/Pages/app";
import { globalStyles } from "@/styles/global";
import * as Icons from "@iconscout/react-unicons";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

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
              <Icons.UilHome /> Home
            </Link>
          </List>
          <p>Categories</p>
          <List active={router.pathname == "/healty" ? true : false}>
            <Link href='/healty'>
              <Icons.UilHeart /> Health
            </Link>
          </List>
          <List disabled={true}>
            <Link href=''>
              <Icons.UilPizzaSlice /> Food
            </Link>
          </List>
          <List disabled={true}>
            <Link href=''>
              <Icons.UilVolleyball /> Pet
            </Link>
          </List>
          <List disabled={true}>
            <Link href=''>
              <Icons.UilFlower />
              Flowers
            </Link>
          </List>
        </ul>
      </Sidebar>
      <Component {...pageProps} />
    </Container>
  );
}
