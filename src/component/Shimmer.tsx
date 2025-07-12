import '../App.css';

export const Shimmer = ({ productLength }: { productLength: number }) => {
  return (
    <div className="shimmer-container">
      {Array.from({ length: productLength }, (_, i) => (
        <div key={i} className="shimmer-card">
          <div className="shimmer-image"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line short"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line short"></div>
        </div>
      ))}
    </div>
  );
};