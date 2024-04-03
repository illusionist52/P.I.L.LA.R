import React from 'react'

function Case({item}) {
  const description = item.d

  const sentences = description.split('. ');
  const filteredSentences = sentences.map(sentence => {
    // Remove the word "Print" and adjacent blank spaces
    return sentence.replace(/\bPrint\s*/ig, '');
  });

  // Join the filtered sentences back into a paragraph
  const filteredParagraph = filteredSentences.join('. ');
  const words = filteredParagraph.split(/\s+/);

  // Take the first 30 words
  const first30Words = words.slice(0, 50);

  // Join the first 30 words back into a string
  const extractedWords = first30Words.join(' ');
  // console.log(filteredParagraph)
  return (
    <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8">
    <div
      className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1">
        <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
        <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
      </div>
    </div>

    <div>
      <strong
        className="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[10px] font-medium text-white"
      >
        Case id- {item.id}
      </strong>

      <h3 className="mt-4 text-lg font-medium sm:text-xl">
        <a href="#" className="hover:underline">{item.t} </a>
      </h3>

      <p className="mt-1 text-sm text-gray-700">
        {extractedWords}...
      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
         

          <p className="text-xs font-medium">{item.s}</p>
        </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

        
      </div>
    </div>
  </div>
</article>
  )
}

export default Case