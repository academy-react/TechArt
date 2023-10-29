function CourseLayout({ children }) {
  return (
    <>
      <div className="md:grid lg:grid-cols-5 md:grid-cols-6 md:gap-6" dir="ltr">
        {children}
      </div>
    </>
  );
}
export { CourseLayout };
