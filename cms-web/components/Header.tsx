// import Head from "next/head"; // 페이지의 Head 수정 가능하게 해주는 모듈
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">
        <button type="button">Home</button>
      </Link>
      <Link href="/server-side">
        <button type="button">ssr</button>
      </Link>
      <Link href="/static">
        <button type="button">static</button>
      </Link>
      <Link href="/client">
        <button type="button">client</button>
      </Link>
    </div>
  );
};

export default Header;
