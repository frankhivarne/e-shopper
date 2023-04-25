/* eslint-disable @next/next/no-img-element */
import Layout from "../layout";
import styled from "styled-components";
import Link from "next/link";
import { AppRoutes } from "../utils/constants";


export default function About() {
  return (
    <Layout
      title="About"
      content={
        <Container>
          <div className="left_frame">
            <h1>ABOUT</h1>
            <img src="/assets/about-img.jpeg" alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius, ex mi finibus dui, at
              pellentesque nulla lorem a sapien. Suspendisse et justo tortor.
              Praesent ac bibendum quam, ac blandit tortor. Sed id diam ac odio
              dignissim fringilla. Nunc nec pellentesque augue. Aenean vel diam
              pharetra, varius odio eu, fringilla ante. In laoreet, dolor vitae
              tincidunt pulvinar, massa est hendrerit urna, vitae lobortis dolor
              nibh sed nisl. Ut dapibus consequat fermentum. Phasellus mi ante,
              facilisis a ligula vitae, pellentesque aliquam neque. Praesent
              dignissim felis placerat convallis placerat. Maecenas consectetur
              augue eget gravida pretium. Nullam a nibh eu elit pretium cursus.
              Morbi faucibus sem vel mauris gravida, eget interdum turpis
              cursus.
            </p>
          </div>
          <div className="right_frame">
            <br />
            <b>Recent Post</b>
            <Link href={AppRoutes.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius
            </Link>
            <Link href={AppRoutes.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
            <Link href={AppRoutes.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
            <Link href={AppRoutes.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
            <Link href={AppRoutes.about}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
          </div>
        </Container>
      }
    />
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }

  .left_frame {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 100%;
      height: 400px;

      @media screen and (max-width: 425px) {
        height: 220px;
      }
    }

    p {
      text-align: justify;
      font-weight: 300;
      font-size: 1.2rem;

      @media screen and (max-width: 425px) {
        font-size: 1rem;
      }
    }
  }

  .right_frame {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      text-decoration: underline;
    }
  }
`;
