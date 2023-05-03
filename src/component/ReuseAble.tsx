import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import {
  Adobe,
  Ebay,
  HashiCorp,
  Loom,
  Okta,
  Tailwind,
  Washington,
  UnderArmour,
  Zapier,
} from "../../public/assets";

const inter = Inter({ subsets: ["latin"] });

function ReuseAble() {
  return (
    <div className={`${inter.className}  w-full bg-green-300`}>
      <span>Trusted by the best frontend teams</span>
      <div className="image1">
        <Image src={Adobe} alt="" />
        <Image src={Okta} alt="" />
        <Image src={UnderArmour} alt="" />
        <Image src={Ebay} alt="" />
        <Image src={Zapier} alt="" />
        <br></br>
        <Image src={Loom} alt="" />
        <Image src={HashiCorp} alt="" />
        <Image src={Tailwind} alt="" />
        <Image src={Washington} alt="" />
      </div>
      <div className="div2">
        <span>Explore the vercel way</span>
        <div className="line"></div>
        <div className="circl"></div>
        <div className="develop">Develop</div>
      </div>
      <div className="div3">
      <div className="Hi">Build when inspiration strikes</div>
      <span>
      Free developers from time-consuming, unnecessary processes that slow your work, so you and your team can focus on creating.
      </span>
      </div>
     <div className="div4">
        <div className="divA"></div>
        <div className="divB">
            <div className="icon1">
                <span>Everything you need to build your site exactly how you imagine, from automatic API handling to built-in image and performance optimizations.</span>
            </div>
            <div className="icon2">
                <span>Connect your pages to any data source, headless CMS, or API and make it work in everyone’s dev environment.</span>
            </div>
            <div className="icon3">
                <span>
                From caching to Serverless Functions, all our cloud primitives work perfectly on localhost.
                </span>
            </div>
        </div>
     </div>
    </div>
  );
}

export default ReuseAble;
