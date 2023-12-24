import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { MessageSquare, BatteryFull, Sticker } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
const perks = [
  {
    name: "Conversational Harmony",
    Icon: MessageSquare,
    description:
      "Immerse yourself in the art of effortless dialogue, where words flow seamlessly. Foster connections, share ideas, and experience the joy of conversational harmony. ",
  },
  {
    name: "Pulse Conversations",
    Icon: BatteryFull,
    description:
      "Discover the rhythm of connection within our chat environment. Engage in vibrant discussions, pulsating with energy, as every message adds beats to the heartbeat of your conversations.",
  },
  {
    name: "Synchronized Dialogues",
    Icon: Sticker,
    description:
      "Immerse yourself in synchronized dialogues, where every exchange is a dance of connection. Our platform harmonizes the ebb and flow of conversation, creating a seamless experience for meaningful interactions.",
  },
];
export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  {
    console.log(JSON.stringify(session));
  }
  return (
    <>
      <MaxWidthWrapper className="">
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            One message at a time{" "}
            <span className="text-blue-600">Connect...</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Engage in lively conversations, effortlessly connecting hearts, and
            unleash the power of words to chat, connect, and thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="'/products" className={buttonVariants()}>
              Explore more
            </Link>
            <Button variant={"ghost"}>See Insights &rarr;</Button>
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
