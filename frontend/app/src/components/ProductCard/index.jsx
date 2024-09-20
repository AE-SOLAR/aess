"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Link } from "react-router-dom";
import { RedLine } from "../ui/red-line";
import { BrandButton } from "../ui/brand-button";

export function ProductCard({ product }) {
  const techData = [
    ["Max. Power", product.powerRange.split("-")[1]],
    ["Technology", product.cell_type.name],
    ["Demension", `${product.length}x${product.width}x${product.height}`],
  ];
  console.log(product);
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
            src={product.image || "/static/panelImg.png"}
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
                src={
                  (product?.images &&
                    product.images.length > 0 &&
                    product.images[0]) ||
                  `/static/images/logos/aesolar/${product.series.name}.svg`
                }
                alt={product.series.name}
                className="h-6 w-6 svg-gray"
              />
              {product.series.name}
            </div>
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="w-[100%] flex flex-col text-neutral-500 text-sm max-w-sm dark:text-neutral-300 px-6"
          >
            {techData.map(([key, value]) => (
              <div className="flex gap-2" key={key}>
                <span>{key}:</span>
                <span className="font-bold dark:text-white text-black">
                  {value}
                </span>
              </div>
            ))}
          </CardItem>
          <div className="w-[100%] flex flex-col justify-between items-center px-6">
            <BrandButton to={`/product/${product.uuid}`}>
              Sign up for prices
            </BrandButton>
            <Link
              to={`/product/${product.uuid}`}
              className="px-4 py-2 font-normal dark:text-white"
            >
              See details
            </Link>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export function ProductCardSkeleton() {
  const color = "-red-950";
  return (
    <div
      class={`w-[250px] h-[500px] border border${color} shadow rounded-md p-4 mx-auto`}
    >
      <div class="animate-pulse flex flex-col">
        <div class={`h-[200px] w-[100%] bg${color} rounded`}></div>
        <div class="flex-1 space-y-6 py-8">
          <div class={`h-2 bg${color} rounded`}></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class={`h-2 bg${color} rounded col-span-2`}></div>
              <div class={`h-2 bg${color} rounded col-span-1`}></div>
            </div>
            <div class="grid grid-cols-3 gap-4">
              <div class={`h-2 bg${color} rounded col-span-1`}></div>
              <div class={`h-2 bg${color} rounded col-span-2`}></div>
            </div>
            <div class={`h-2 bg${color} rounded`}></div>
          </div>
          <div class="flex justify-between items-center flex-col gap-5 py-4">
            <div class={`h-12 w-[100%] bg${color} rounded`}></div>
            <div class={`h-12 w-[100%] bg${color} rounded`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
