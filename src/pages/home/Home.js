import { useEffect } from "react";
import styled from "styled-components";
import { nowPlayingList } from "../../api";

const MainBanner = styled.div`
  height: 80vh;
  background-color: lightgray;
  position: relative;
  padding: 400px 5%;
  h3,
  p {
    position: relative;
  }

  h3 {
    font-size: 80px;
    font-weight: 700;
    margin-bottom: 30px;
    letter-spacing: -3px;
    line-height: 100px;
  }

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    18deg,
    rgba(0, 0, 0, 1) 21%,
    rgba(255, 255, 255, 0.5080882694874824) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
`;

export const Home = () => {
  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlayingList();
        console.log(results[0].title);
      } catch (error) {}
    })();
  }, []);

  return (
    <MainBanner>
      <BlackBg />
      <h3>Title</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia suscipit
        distinctio temporibus perferendis similique, quos et labore obcaecati
        nihil quibusdam, at, doloribus quaerat sed consequuntur magnam magni
        veniam saepe earum?
      </p>
    </MainBanner>
  );
};
