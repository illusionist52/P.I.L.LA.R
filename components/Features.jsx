import Image from "next/image";
import { IoDocumentText, IoSearchCircle } from "react-icons/io5";
import { BsClipboard2DataFill } from "react-icons/bs";
import { MdOutlineTextSnippet, MdOutlineTextsms } from "react-icons/md";
const Features = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Why you should use P.I.L.L.A.R
          </h2>

          <p className="mt-4 text-gray-300">
            Unlock the power of legal knowledge: harness the potential of
            concise lease insights, engage in dynamic document chat
            capabilities, and explore a comprehensive collection of searchable
            cases, empowering informed decisions and strategic maneuvers.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <MdOutlineTextsms size={40} color="blue"/>
 
            <h2 className="mt-4 text-xl font-bold text-white">
              Interactive Document Chat
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Foster seamless collaboration and communication within documents
              through real-time chat functionality. This innovative feature
              allows users to discuss specific clauses, negotiate terms, and
              seek clarification, enhancing efficiency and clarity in lease
              agreement negotiations.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <BsClipboard2DataFill size={40} color="blue"/>
 
            <h2 className="mt-4 text-xl font-bold text-white">
              Extensive Case Database
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Explore a vast collection of legal cases, spanning multiple
              jurisdictions and practice areas, offering rich insights and
              reliable precedents for your research needs.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
           <IoSearchCircle size={40} color="blue" />
            

            <h2 className="mt-4 text-xl font-bold text-white">
              Advanced Search Functionality:
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Harness the power of cutting-edge search technology, leveraging
              vector embeddings and ElasticSearch algorithms to deliver precise
              and efficient case retrieval. Users can refine their searches with
              advanced filters, keywords, and metadata, ensuring relevant and
              accurate results tailored to their specific research objectives.
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <MdOutlineTextSnippet size={40}  color="blue" />
           
            <h2 className="mt-4 text-xl font-bold text-white">
              Simplified Lease Insights
            </h2>

            <p className="mt-1 text-sm text-gray-300">
              Simplify the complexities of lease agreements with succinct yet
              comprehensive summaries tailored to enhance user understanding. By
              distilling intricate legal language into clear and accessible
              insights, our platform empowers users to grasp key terms,
              obligations, and rights outlined in lease agreements, facilitating
              informed decision-making for landlords and tenants alike.
            </p>
          </a>

         
        </div>

        
      </div>
    </section>
  );
};

export default Features;
