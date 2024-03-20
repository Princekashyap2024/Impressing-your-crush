import { ResponseButton } from "@/components/ResponseButton";
import Link from "next/link";

export default function Page() {
  return <div className="container">
    <Link href="https://tenor.com/search/mochi-stickers" target="_blank">
      <img src="https://media.tenor.com/dltr8Wx24g8AAAAi/mochi.gif" alt="" />
    </Link>
    {/* <div
      className="tenor-gif-embed"
      data-postid="22050818"
      data-share-method="host"
      data-aspect-ratio="1"
      data-width="100%"
    >
      <Link href="https://tenor.com/view/mochi-gif-22050818">Mochi Sticker</Link>from
      <Link href="https://tenor.com/search/mochi-stickers">Mochi Stickers</Link>
    </div> */}
    <h1>Soch le ache se! 🙄</h1>
    <p>itte jldi nhi mtt bol🙄</p>

    <div className="btn">
    <ResponseButton href="/yes">Yes</ResponseButton>
        <ResponseButton href="/no-2">No</ResponseButton>
    </div>
  </div>
}