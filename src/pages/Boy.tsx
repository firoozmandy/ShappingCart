import StorItem from "../components/StorItem";
import storeItems from "../data/boyItems.json";

export default function Boy() {
  return (
    <>
      {/* <h1>Store</h1> */}
      <div className="flex flex-wrap py-24 sm:py-32 justify-center gap-10 ">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StorItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
}
