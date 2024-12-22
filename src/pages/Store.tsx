import StorItem from "../components/StorItem";
import storeItems from "../data/items.json";

export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StorItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
}
