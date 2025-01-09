import GradientTextComponent from "./GradientText.component";

interface Prices {
  title: string;
  price: string;
  description: string;
  pages: string;
  duration: string;
  additional: string[];
}

export default function PricingCardComponent(items: Prices) {
  const { title, price, description, pages, duration, additional } = items;

  return (
    <div className="min-h-[35rem] text-balance border rounded-[20px] p-4 bg-transparent transform duration-700 ease-in-out hover:scale-[1.02]">
      <GradientTextComponent
        span={false}
        texts={title}
        classNames="font-audioWide text-2xl"
      />
      <p className="text-md font-audioWide text-gray-300 mt-4">{price}</p>
      <p className="text-xl text-gray-400 mt-2">{description}</p>
      <p className="text-lg text-gray-500 mt-2">Pages: {pages}</p>
      <p className="text-lg text-gray-500 mt-2">Duration: {duration}</p>
      <p className="text-lg font-audioWide text-slate-500 mt-6">Additional:</p>
      <ul className="mt-2 text-lg  text-gray-400 list-disc pl-5">
        {additional.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
