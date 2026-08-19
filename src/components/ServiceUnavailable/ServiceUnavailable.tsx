const ServiceUnavailable = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 py-10 text-center">
      <h1 className="font-fairplay text-3xl font-medium text-brown-dark">
        Something went wrong
      </h1>
      <p className="font-fairplay text-lg text-brown-light">
        Today&apos;s painting could not be loaded. Please try again in a moment.
      </p>
    </div>
  );
};

export default ServiceUnavailable;
