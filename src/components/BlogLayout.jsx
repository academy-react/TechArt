function BlogLayout({ children }) {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 border-2 border-red-500">
        {children}
      </div>
    </>
  );
}
export { BlogLayout };
