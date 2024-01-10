import { Definition } from "../contexts/DictionaryContext";

function WordMeaningItem({ definition, example }: Definition) {
  return (
    <li className="grid grid-cols-[0.5rem_1fr] items-center gap-x-8 gap-y-2">
      <span className="h-[0.5rem] w-[0.5rem] basis-[0.5rem] rounded-full bg-[#8f19e8]"></span>
      <span className="text-[1.8rem] leading-[2.4rem]">{definition}</span>
      {example && (
        <span className="col-start-2 text-[1.8rem] leading-[2.4rem] text-757575">
          "{example}""
        </span>
      )}
    </li>
  );
}

export default WordMeaningItem;