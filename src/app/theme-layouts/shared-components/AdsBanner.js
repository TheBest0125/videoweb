import { memo } from "react";

function AdsBanner(props) {
  return (
    <div className="bg-blue-500 text-white text-center">
      <img
        className="w-full h-[100px]"
        src="/assets/images/backgrounds/1.jpg"
        alt="banner"
      />
    </div>
  );
}

export default memo(AdsBanner);
