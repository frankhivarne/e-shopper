/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styled from "styled-components";
import Layout from "../layout";
import { AppRoutes } from "../utils/constants";
// import styled from "styled-components";

export default function About() {
  return (
    <Layout
      title="About"
      content={
        <Container>
          <div className="left_frame">
            <h1>BLOG</h1>
            <BlogPost>
              <img src="/assets/helpcenter.jpeg" alt="" />
              <h4>How do I place an order on Shopper?</h4>
              <p>
                To place an order on Shopper: 
                <br/>&#x2022; Enter the name of the item you’d like to buy in the search bar. You can also browse for products
                by selecting the category on the left side of your screen <br/>
                &#x2022; Click on a product to learn more about it or add to your cart <br/>&#x2022;
                Click add to cart and proceed to the checkout page 
                <br/>&#x2022; Register or login
                into your existing account by entering your email and password
                <br/>&#x2022; Enter your shipping/billing information ensuring your address is
                complete and accurate <br/>&#x2022; Select a Delivery Method Choose your
                preferred Payment Method <br/>&#x2022; Click on Confirm Order to complete your
                order. <br/>&#x2022; For additional support contact us at +1207006000XXXX. Our
                hours of operations are 8am - 8pm on Mondays to Sundays.
              </p>
              <Link href={AppRoutes.blog}>
                <button>LEARN MORE</button>
              </Link>
            </BlogPost>
            <BlogPost>
              <h4>
                I am having trouble adding products to my cart. What do I do?
              </h4>
              <p>
                If you are having trouble adding products to your cart please
                make sure that you have made all relevant size and color
                selections. If you still have problems this may mean that the
                item you are trying to buy is sold out. For additional support
                contact us at +1207006000XXXX. Our hours of operations are 8am -
                8pm on Mondays to Sundays.
              </p>
              <Link href={AppRoutes.blog}>
                <button>LEARN MORE</button>
              </Link>
            </BlogPost>
            <BlogPost>
              <h4>How do I track my order?</h4>
              <p>
                To track the status of your order: Log into your Shopper account
                Select ‘Account’ in the upper right hand menu Select ‘Orders’
                Find the item you would like to track and click ‘see details’
                Select the “track item” to display delivery details You also
                receive delivery updates via email Account mailbox and App
                notifications to make it easy to know when your order will be
                delivered. For additional support please contact us here
              </p>
              <Link href={AppRoutes.blog}>
                <button>LEARN MORE</button>
              </Link>
            </BlogPost>
            <BlogPost>
              <h4>
                I am unhappy with the service from the delivery associate. How
                can I share my feedback?
              </h4>
              <p>
                We take customer satisfaction seriously. If you’re unhappy with
                the service provided by our delivery agent please contact us
                here to report the incident so we can take the necessary
                corrective actions
              </p>
              <Link href={AppRoutes.blog}>
                <button>LEARN MORE</button>
              </Link>
            </BlogPost>
          </div>
          <div className="right_frame">
            <br />
            <b>Recent Post</b>
            <Link href={AppRoutes.blog}>
              How do I place an order on Shopper?
            </Link>
            <Link href={AppRoutes.blog}>
              I am having trouble adding products to my cart. What do I do?
            </Link>
            <Link href={AppRoutes.blog}>How do I track my order?</Link>
            <Link href={AppRoutes.blog}>How much are delivery fees?</Link>
            <Link href={AppRoutes.blog}>
              I am unhappy with the service from the delivery associate. How can
              I share my feedback?
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
  }

  .left_frame {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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

const BlogPost = styled.div`
  width: 100%;
  margin: 1rem 0;
  cursor: pointer;

  img {
    width: 100%;
    height: 350px;
    object-fit: fill;
    margin-bottom: 1rem;

    :hover {
      opacity: 0.8;
    }

    @media screen and (max-width: 425px) {
      height: 220px;
    }
  }

  h4 {
    text-align: justify;
    font-weight: 500;
    font-size: 1.4rem;
    text-transform: uppercase;

    @media screen and (max-width: 425px) {
      font-size: 1rem;
    }
  }
  p {
    text-align: justify;
    font-weight: 300;
    font-size: 1.1rem;

    @media screen and (max-width: 425px) {
      font-size: 1rem;
    }
  }

  button {
    background: #000;
    padding: 0.5rem 3rem;
    outline: none;
    border: none;
    cursor: pointer;
    color: #fff;
  }
`;
