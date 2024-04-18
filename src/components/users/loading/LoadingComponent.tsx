const loadingGif = "/assets/vids/loading_page.gif";

const LoadingComponent = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div className="loading-container">
        <img src={loadingGif} alt="Loading GIF max-w-full max-h-full" />
      </div>
    </div>
  );
};

export default LoadingComponent;
