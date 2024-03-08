import React from "react";
import CollectionItems from "./CollectionItems";

const Collection = () => {
  return (
    <section className="py-40">
      <div className="container">
        <div>
          <div>
            <h2 className="text-6xl text-center font-bold pb-24">
              New Collection
            </h2>
          </div>
          <div className="flex sm:gap-8 xl:gap-24">
            <CollectionItems
              imgUrl="/collection-img-(1).png"
              prodactTxt="Sweater"
            />
            <CollectionItems
              imgUrl="/collection-img-(2).png"
              prodactTxt=" Jeans "
            />
            <CollectionItems
              imgUrl="/collection-img-(3).png"
              prodactTxt="Baskets"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
