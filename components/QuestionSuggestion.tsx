export default function QuestionSuggestion({
  questions,
}: {
  questions: string[];
}) {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-3">
        {questions.map((question, index) => (
          <button
            key={index}
            className="bg-white border border-gray-200 hover:border-blue-400 hover:bg-blue-50 rounded-lg p-3 text-left text-gray-600 hover:text-blue-600 shadow-sm transition-all duration-200 flex items-center group hover:cursor-pointer"
          >
            <span className="text-sm font-medium">{question}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
