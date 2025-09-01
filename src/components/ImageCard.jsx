import { Image } from "astro:assets";
import Label from "./Label";

function ImageCard(job) {
  const { img, title = "hey", content = "hey", tags = [], handleSelect } = job;

  return (
    <article className="group w-full shadow-lg/60 shadow-purple-600/30 relative rounded-xl bg-[#0f1725] text-white hover:scale-105 transition-transform duration-1000 overflow-hidden">
      <picture className="h-56 max-h-56 w-full overflow-hidden block">
        {/* <Image src={img} /> */}
        <img
          className="group-hover:scale-110 object-cover w-full h-full transition-transform duration-700"
          src={img}
        />
      </picture>
      <div className="flex flex-col">
        <header className="p-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300 mb-2">
            {title}
          </h2>
          <button
            className="border-none hover:cursor-pointer"
            onClick={() => handleSelect(job)}
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </header>

        <p className="text-gray-400 h-full mb-4 flex-1 px-5">{content}</p>
        <footer className="flex flex-wrap items-center justify-start gap-1 p-5">
          {tags.map((tag) => (
            <Label key={tag} text={tag} />
          ))}
        </footer>
      </div>
    </article>
  );
}

export default ImageCard;
