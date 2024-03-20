import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div className="container">
    <Link href="https://tenor.com/search/manja-stickers" target="_blank">
      <img src="https://media.tenor.com/p_VEcmrBsLMAAAAi/manja.gif" alt="" />
    </Link>
    {/* <div
      className="tenor-gif-embed"
      data-postid="22885016"
      data-share-method="host"
      data-aspect-ratio="1.04918"
      data-width="100%"
    >
      <Link href="https://tenor.com/view/manja-gif-22885016">Manja Sticker</Link>from
      <Link href="https://tenor.com/search/manja-stickers">Manja Stickers</Link>
    </div> */}
    <h1>DO you love me? 🤗</h1>
    <p>~techeonn tera hi hai</p>

    <div className="btn">
      <Link href="/yes">Yes</Link>
      <Link href="/no-1">No</Link>
    </div>
  </div>

}
