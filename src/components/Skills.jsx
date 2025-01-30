import Skillbox from "./Skillbox";
import Title from "./Title";

function Skills() {

  return (
    <>
      <div className="flex bg-[#F3F0E0] items-end">
        <div className="h-16 w-[10%] bg-[#1C1C1C]"></div>
        <div className="h-28 w-[15%] bg-[#1C1C1C]"></div>
        <div className="h-16 w-[15%] bg-[#1C1C1C]"></div>
        <div className="h-40 w-[20%] bg-[#1C1C1C]"></div>
        <div className="h-56 w-[40%] bg-[#1C1C1C]"></div>
      </div>

      <div className="flex-col gap-8 text-white bg-[#1C1C1C] w-full h-full px-8 sm:px-6 md:px-16 py-8">
        <div className="w-full flex justify-center">
          <Title TitleText={"Skills"} color={"#FF8BFF"} />
        </div>

        <div className="mt-16 h-full w-full text-[#1C1C1C] flex flex-wrap justify-center gap-8 sm:gap-16">
          <Skillbox text={"Java"} />
          <Skillbox text={"Python"} />
          {/* <Skillbox text={"C/C++"}/> */}
          <Skillbox text={"SQL"} />
          <Skillbox text={"JavaScript"} />
          <Skillbox text={"TypeScript"} />
          <Skillbox text={"React"} />
          <Skillbox text={"Redux"} />
          <Skillbox text={"Tailwind CSS"} />
          <Skillbox text={"Next.js"} />
          <Skillbox text={"Django"} />
          <Skillbox text={"REST API"} />
          <Skillbox text={"Git & GitHub"} />
          <Skillbox text={"Docker"} />
          <Skillbox text={"Postman"} />
          <Skillbox text={"Celery"} />
          <Skillbox text={"Redis"} />
          {/* <Skillbox text={"RabbitMQ"}/>
          <Skillbox text={"Kafka"}/>
          <Skillbox text={"ElasticSearch"}/> */}
          <Skillbox text={"DSA"} />
          {/* <Skillbox text={"OOP"}/>
          <Skillbox text={"OS"}/>
          <Skillbox text={"Networks"}/> */}
          <Skillbox text={"DBMS"} />
          <Skillbox text={"Linux"} />
        </div>
      </div>

      <div className="flex bg-[#F3F0E0]">
        <div className="h-16 w-[10%] bg-[#1C1C1C]"></div>
        <div className="h-28 w-[15%] bg-[#1C1C1C]"></div>
        <div className="h-16 w-[15%] bg-[#1C1C1C]"></div>
        <div className="h-40 w-[20%] bg-[#1C1C1C]"></div>
        <div className="h-56 w-[40%] bg-[#1C1C1C]"></div>
      </div>
    </>
  );
}

export default Skills;
