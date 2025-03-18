const ContentComponent = ({ children }) => {
  return (
    <main className="flex-1 flex justify-center">
      <div className="min-h-screen bg-white w-[90%] rounded-4xl p-6 shadow-lg no-scrollbar">
        {children}
      </div>
    </main>
  );
};

export default ContentComponent;
