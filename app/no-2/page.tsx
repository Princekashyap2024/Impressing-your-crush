import Link from "next/link";

export default function Page(){
    return <div className="container">
      <Link href="https://tenor.com/search/couple-stickers" target="_blank">
      <img src="https://media.tenor.com/tzvzrz4famQAAAAi/couple-forgive-me.gif" alt="" />
    </Link>
    {/* <div
      className="tenor-gif-embed"
      data-postid="15195810"
      data-share-method="host"
      data-aspect-ratio="1"
      data-width="100%"
    >
      <Link
        href="https://tenor.com/view/couple-forgive-me-asking-for-forgiveness-begging-crying-gif-15195810"
        >Couple Forgive Me Sticker</Link>from
      <Link href="https://tenor.com/search/couple-stickers">Couple Stickers</Link>
    </div> */}

    <h1>Ek aur baar Soch le! 😣</h1>
    <p>kyu aisa kr rahi hai 😣</p>

    <div className="btn">
      <Link href="/yes">Yes</Link>
      <Link href="/no-3">No</Link>
    </div>
  </div>
}