import Layout from "../layout";
import styled from "styled-components";
import Link from "next/link";
import { AppRoutes } from "../utils/constants";

export default function Contact() {
  return (
    <Layout
      title="Contact"
      content={
        <Container>
          <div className="left_frame">
            <h1>Contact Us</h1>
            <p>
              Please enter your contact details and a short message below and I
              will try to answer your query as soon as possible.
            </p>
            <form action="">
              <div className="group">
                <h3>Name</h3>
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="group">
                <h3>Email</h3>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="group">
                <h3>Message</h3>
                <textarea rows={5} placeholder="Your Message" />
              </div>
              <button>Submit</button>
            </form>
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
  gap: 4rem;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .left_frame {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      width: 100%;
      height: 400px;
    }

    p {
      text-align: justify;
      font-weight: 300;
      font-size: 1rem;
      background: silver;
      max-width: max-content;
      padding: 0.2rem 0.5rem;
    }

    h3 {
      font-weight: 500;
    }

    input,
    textarea {
      font-weight:300;
      font-size: 1.02rem;
      width: 60%;
      border-radius: 3px;
      outline: none;
      border: 1px solid #bdbdbd;
      padding: 0.25rem 0.5rem;

      :focus {
        border: 1px solid lightBlue;
      }

      @media screen and (max-width: 425px) {
        width: 100%;
        font-size: 1rem;
      }
    }

    button {
      font-size: 1.02rem;
      font-weight: 400;
      width: max-content;
      outline: none;
      border: none;
      padding: 0.25rem 4rem;
      background: #000;
      color: #fff;
      margin-top: 0.5rem;
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
    }

    .group {
      margin-bottom: 0.5rem;
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
