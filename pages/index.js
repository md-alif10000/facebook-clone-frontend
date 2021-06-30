import Head from 'next/head'
import Header from '../components/Header'
import { getSession } from "next-auth/client";
import Login from '../components/Login'
import Sidebar from '../components/Sidebar';
import Stories from '../components/Stories';
import Feed from '../components/Feed';
import Widgets from '../components/Widgets';



export default function Home({ session }) {
  // if(!session) return <Login/>
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="connect with your friends" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div
        className="flex bg-gray-100 "
        style={{maxHeight:"calc(100vh - 65px)"}}
     
      >
        <Sidebar />
        <Feed />
        <Widgets/>
      </div>
    </div>
  );
}


export async function getServerSideProps(context) {
  const session = await getSession(context);
  console.log(session)
  return { props: { session } };
   

}
