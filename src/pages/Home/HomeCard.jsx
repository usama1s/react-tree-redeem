import React, { lazy, Suspense } from "react";
import "../../App.css";
import "./Home.css";

const CircleTextWrap = lazy(() => import("../../components/CircleTextWrap/CircleTextWrap"));
const QEVCircleTextWrap = lazy(() => import("../../components/CircleTextWrap/QEVCircleTextWrap"));

function HomeCard() {
  const coinOptions = [
    {
      id: 1,
      code: "GLMR",
    },
    {
      id: 2,
      code: "ETH",
    },
    {
      id: 3,
      code: "MATIC",
    },
    {
      id: 4,
      code: "OP",
    },
  ];

  return (
    <div className="h-fulll md:flex-row home">
      <div className="box-container mx-auto flex items-center justify-between">
        <div className="p-4 w-full box">
          <h2 className="home__cta">REDEEM YOUR</h2>
          <p className="home__cta__name">Royalties</p>
        </div>
        <div className="p-4 w-full box">
          <h2 className="home__cta">Redeem your</h2>
          <p className="home__cta__name">Tokens</p>
        </div>
      </div>
      <section className="box-container-section flex justify-center items-center">
        <div className="grid grid-cols-2 box-container__left">
          <Suspense fallback={<div>Loading...</div>}>
            {coinOptions.map((item) => (
              <CircleTextWrap key={item.id}>{item.code}</CircleTextWrap>
            ))}
          </Suspense>
        </div>
        <div className="box-container__right">
          <Suspense fallback={<div>Loading...</div>}>
            <QEVCircleTextWrap coinValue="QEV" />
          </Suspense>
        </div>
      </section>
    </div>
  );
}

export default HomeCard;
