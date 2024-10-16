import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "react-router-dom";
import { RedLine } from "../ui/red-line";
import BrandButton from "../BrandButton";
import { Page } from "../../routes/pages";

export function PanelItem({ product }) {
  const techData = [
    ["Power range, W", `${product.power_range[0]}-${product.power_range[1]}`],
    ["Technology", product.cell_type],
    [
      "Demension",
      `${product.dimensions.length}x${product.dimensions.width}x${product.dimensions.height}`,
    ],
  ];

  return (
    <CardContainer
      className="w-[100%] max-w-[255px] h-[550px] px-1"
      style={{
        color: "white",
        fontSize: 14,
        fontFamily: "Criteria CF",
        fontWeight: "400",
        wordWrap: "break-word",
      }}
    >
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-zinc-900 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl border">
        <CardItem translateZ="100" className="w-full mt-4 px-6">
          <img
            src={
              (product?.images &&
                product.images.length > 0 &&
                product.images[0]) ||
              product.image ||
              "/static/panelImg.png"
            }
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <RedLine />
        <CardItem
          translateZ="50"
          className="flex flex-col h-auto justify-around items-start gap-6 w-[100%]"
        >
          <CardItem
            translateZ="50"
            className="flex flex-col gap-2 text-start text-xl font-bold text-neutral-600 dark:text-white px-6 py-2"
          >
            <span className="text-lg">{product.model}</span>
            <div className="flex gap-2" style={{ color: "#A7A9AC" }}>
              <img
                src={`/static/images/logos/aesolar/${product.series}.svg`}
                alt={product.series}
                className="h-6 w-6 svg-gray"
              />
              {product.series}
            </div>
          </CardItem>
          <CardItem
            as="span"
            translateZ="60"
            className="w-[100%] flex flex-col text-neutral-500 text-sm max-w-sm dark:text-neutral-300 px-6"
          >
            {techData.map(([key, value]) => (
              <div className="flex gap-2" key={key}>
                <span>{key}:</span>
                <span className="font-bold dark:text-white text-black whitespace-nowrap">
                  {value}
                </span>
              </div>
            ))}
          </CardItem>
          <div className="w-[100%] flex flex-col justify-between items-center px-6">
            <BrandButton to={Page.signup.path}>Sign up for prices</BrandButton>
            <Link
              to={`/product/panels/${product.model
                .replace(/\s/g, "-")
                .replace(/×/g, "x")}`}
              className="px-4 py-2 font-normal text-black dark:text-white"
            >
              See details
            </Link>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export function PanelItemSkeleton() {
  return (
    <div
      className={`w-[250px] h-[500px] border border-red-950 shadow rounded-md p-4 mx-auto`}
    >
      <div className="flex flex-col">
        <div className={`h-[200px] w-[100%] bg-red-950 rounded`}></div>
        <div className="flex-1 space-y-6 py-8">
          <div className={`h-2 bg-red-950 rounded`}></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className={`h-2 bg-red-950 rounded col-span-2`}></div>
              <div className={`h-2 bg-red-950 rounded col-span-1`}></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className={`h-2 bg-red-950 rounded col-span-1`}></div>
              <div className={`h-2 bg-red-950 rounded col-span-2`}></div>
            </div>
            <div className={`h-2 bg-red-950 rounded`}></div>
          </div>
          <div className="flex justify-between items-center flex-col gap-5 py-4">
            <div className={`h-12 w-[100%] bg-red-950 rounded`}></div>
            <div className={`h-12 w-[100%] bg-red-950 rounded`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
