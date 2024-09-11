import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-black pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-[#00ff00] sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Amoeba Labs AI
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-[#39ff14] sm:text-lg md:text-xl font-mono">
                  We create cutting-edge commercial solutions powered by generative AI for any industry or application imaginable.
                </p>
                <div className="flex justify-center">
                  <Link
                    href="https://github.com/AmoebaLabsAI"
                    className="rounded-sm border border-[#00ff00] bg-black px-8 py-4 text-base font-semibold text-[#00ff00] duration-300 ease-in-out hover:bg-[#003300] hover:shadow-[0_0_10px_#00ff00]"
                  >
                    Check us out on GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team section */}
        <section id="team" className="py-16 bg-black">
          <div className="container">
            <h2 className="mb-12 text-3xl font-bold text-center text-[#00ff00]">
              Our Agents
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Thierry Damiba */}
              <div className="flex flex-col items-center bg-[#001a00] rounded-sm p-8 border border-[#00ff00] shadow-[0_0_10px_#00ff00]">
                <div className="w-64 h-64 mb-4 overflow-hidden rounded-sm border-2 border-[#39ff14]">
                  <Image
                    src="/images/td.jpg"
                    alt="Thierry Damiba"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#00ff00]">Thierry Damiba</h3>
                <p className="text-lg font-medium text-[#39ff14]">The Architect</p>
                <p className="mt-4 text-center text-[#00ff00] font-mono">
                  A Data Scientist and Developer Advocate, Thierry decodes the Matrix of data. His experience spans from government agencies to Fortune 500 companies, bringing order to the chaos of information.
                </p>
              </div>

              {/* Joe Damiba */}
              <div className="flex flex-col items-center bg-[#001a00] rounded-sm p-8 border border-[#00ff00] shadow-[0_0_10px_#00ff00]">
                <div className="w-64 h-64 mb-4 overflow-hidden rounded-sm border-2 border-[#39ff14]">
                  <Image
                    src="/images/joe.jpg"
                    alt="Joe Damiba"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-[#00ff00]">Joe Damiba</h3>
                <p className="text-lg font-medium text-[#39ff14]">The Oracle</p>
                <p className="mt-4 text-center text-[#00ff00] font-mono">
                  A Front-End Web Developer and Developer Advocate, Joe navigates the ever-shifting digital landscape. His mastery of JavaScript and TypeScript allows him to bend the rules of the Matrix, creating interfaces between humans and machines.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Hero;
