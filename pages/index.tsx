import Head from "next/head";
import '../styles/globals.scss' 
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";

const HomeNotAuth = function () {
  return (
		<>
			<Head>
                <title>Onebitflix</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
                <meta property="og:title" content="Onebitflix" key="title" />
				<meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."></meta>
            </Head>
			<main>
                <HeaderNoAuth />
            </main>
		</>
        )
};

export default HomeNotAuth;