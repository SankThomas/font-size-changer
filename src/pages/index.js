import { Inter } from "next/font/google";
import Head from "next/head";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [size, setSize] = useState(16);

  if (size < 16) {
    setSize(16);
    alert("You can't go lower than 16px");
  }

  if (size > 72) {
    setSize(72);
    alert("You can't go higher than 72px");
  }

  return (
    <>
      <Head>
        <title>Font Size Changer In NextJs</title>
      </Head>

      <div className="absolute left-1/2 top-1/2 w-52 lg:w-[400px] h-52 lg:h-[400px] bg-red-500 -translate-x-1/2 -translate-y-1/2 -z-10 blur-[150px] lg:blur-[250px]"></div>

      <div className={`${inter.className} p-8 max-w-3xl mx-auto`}>
        <h1 className="text-4xl lg:text-6xl font-bold text-center">
          Font Size Changer
        </h1>

        <ul className="flex items-center justify-center gap-4 mt-10">
          <li>
            <button
              onClick={() => setSize(size - 4)}
              className="py-2 px-6 rounded shadow bg-[#333333] text-white hover:bg-[#222222]"
            >
              Decrease Font Size
            </button>
          </li>
          <li>
            <button
              onClick={() => setSize(size + 4)}
              className="py-2 px-6 rounded shadow bg-[#333333] text-white hover:bg-[#222222]"
            >
              Increase Font Size
            </button>
          </li>
        </ul>

        <p className="text-2xl mt-10">
          The current font size is{" "}
          <span className="font-bold text-3xl">{size} px</span>
        </p>

        <div className="flex flex-col gap-8 mt-10">
          <p
            style={{
              fontSize: size,
            }}
          >
            Doloribus magni consequuntur illo rem dolorum quos molestias, ut
            excepturi veritatis architecto.
          </p>

          <p
            style={{
              fontSize: size,
            }}
          >
            Minus laborum non sunt suscipit dolorum molestiae sint dicta enim
            perferendis illo dolor atque quaerat, vitae impedit libero et
            temporibus nobis aliquam!
          </p>

          <p
            style={{
              fontSize: size,
            }}
          >
            Neque, optio eos qui deleniti aspernatur, debitis labore quo, quidem
            quos praesentium suscipit. Asperiores, possimus laboriosam dicta
            recusandae suscipit sunt mollitia et beatae obcaecati numquam
            doloremque omnis voluptas nam qui alias. Dicta.
          </p>
        </div>
      </div>
    </>
  );
}
