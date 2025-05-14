const History = () => {
  return (
    <div className="bg-white rounded-xl shadow p-10 min-h-[60vh]">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900">History</h1>
      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Education</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900">[Your University]</h3>
              <p className="text-gray-700">[Degree] in [Field]</p>
              <p className="text-sm text-gray-500">[Year] - [Year]</p>
            </div>
            {/* Add more education entries as needed */}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Work Experience</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-gray-900">[Company Name]</h3>
              <p className="text-gray-700">[Position]</p>
              <p className="text-sm text-gray-500">[Start Date] - [End Date]</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>[Key responsibility or achievement]</li>
                <li>[Key responsibility or achievement]</li>
              </ul>
            </div>
            {/* Add more work experience entries as needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default History; 