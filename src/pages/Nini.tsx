import storeItems from "../data/items.json";
import StorItem from "../components/StorItem";

export default function Nini() {
  return (
    <div className="py-24 sm:py-32">
      {/* <h1 className="">Store</h1> */}
      <div className="flex flex-wrap justify-center gap-10">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StorItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
