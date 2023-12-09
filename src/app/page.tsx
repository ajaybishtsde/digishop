import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ArrowBigDown,
  ArrowDownToLine,
  CheckCircle,
  Ghost,
  Leaf,
} from "lucide-react";
import Link from "next/link";
const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, exercitationem?",
  },
  {
    name: "Guranteed Quality",
    Icon: CheckCircle,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. dolore incidunt, dolor ratione quas saepe quam alias. Molestias, accusamus doloremque quidem minima asperiores perferendis fuga, magnam illo quaerat delectus laborum recusandae sint!",
  },
  {
    name: "For The Planet",
    Icon: Leaf,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, exercitationem?",
  },
];
export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="">
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your market place for high-quality{" "}
            <span className="text-blue-600">Digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to BeDigital. Every asset on our platform is verified by our
            team to ensure our highest quality standards
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="'/products" className={buttonVariants()}>
              Browse trending
            </Link>
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>
      <section>
        <MaxWidthWrapper className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {perks.map((item, i) => (
            <div
              key={i}
              className=" text-center md:flex md:items-start md:text-left lg:block lg:text-center"
            >
              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                  {<item.Icon className="w-1/3 h-1/3" />}
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-grey-900">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </MaxWidthWrapper>
      </section>
    </>
  );
}
