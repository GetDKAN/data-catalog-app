import Helmet from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

const Layout = ({children, title}: LayoutProps) => {
  return (
    <div className="">
      <Helmet
        title={`${title} - DKAN Demo`}
        defer={false}
        htmlAttributes={{
          "lang": "en"
        }}
      />
      <Header />
      <main className="mb-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
