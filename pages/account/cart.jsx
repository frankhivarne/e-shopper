import CartList from "../../components/CartList";
import Layout from "../../layout";
import styled from "styled-components";
import Link from "next/link";
import { AppRoutes } from "../../utils/constants";
import { Button, InputField } from "../../reusables";
import { useSelector } from "react-redux";
import { cartSelector } from "../../redux/reducers/cart";
import { useRouter } from "next/router";

export default function Cart() {
  const router = useRouter();
  const { yourCart } = useSelector(cartSelector);
  const total = yourCart?.reduce((a, curr) => a + curr.subTotal, 0);
  return (
    <Layout
      title="Account - Cart"
      content={
        <Container>
          <div className="left">
            <h1>Cart</h1>
            <br />
            {yourCart?.length === 0 && (
              <div className="empty_cart_wrapper">
                <div className="empty_cart">Your cart is currently empty</div>
                <br />
                <Link href={AppRoutes.home}>Return to Shop</Link>
              </div>
            )}
            {yourCart?.length > 0 && (
              <>
                <div className="table_header">
                  <div>Product</div>
                  <div>Image</div>
                  <div>Price</div>
                  <div>Quantity</div>
                  <div>Subtotal</div>
                  <div>...</div>
                </div>
                <div className="cover" />
                {yourCart?.map((item, index) => {
                  return <CartList key={index} {...item} />;
                })}
                <div className="table_footer">
                  <div className="flex">
                    <InputField full placeholder="coupon code" />
                    <Button text="Apply Coupon" primary />
                  </div>
                  {/* <Button text="Update Cart" primary /> */}
                </div>
                <br />
                <div className="cart_details">
                  <h1>Cart Total</h1>
                  <div className="subtotal">
                    <h4>Subtotal</h4>
                    <p>${total.toLocaleString()}</p>
                  </div>
                  <div className="total">
                    <h4>Total</h4>
                    <p>
                      <b>${total.toLocaleString()}</b>
                    </p>
                  </div>
                  <br />
                  <Button
                    onClick={() => router.push(AppRoutes.checkout)}
                    full
                    text="Proceed to checkout"
                    primary
                  />
                </div>
              </>
            )}
          </div>
          <div className="right_frame">
            <br />
            <b>Recent Post (FAQS)</b>
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
  gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 425px) {
    .cover {
      border-top: 1px solid #bdbdbd;
    }
  }

  .table_header {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 1fr 0.5fr;
    align-items: center;
    padding: 0.25rem 1rem;
    font-weight: 300;
    font-size: 1.1rem;
    border: 1px solid #bdbdbd;
    border-radius: 3px 3px 0 0;

    @media screen and (max-width: 425px) {
      display: none;
    }
  }

  .table_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    font-weight: 300;
    font-size: 1.1rem;
    border-bottom: 1px solid #bdbdbd;
    border-left: 1px solid #bdbdbd;
    border-right: 1px solid #bdbdbd;
    border-radius: 0 0 3px 3px;

    @media screen and (max-width: 425px) {
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;

      .flex {
        gap: 0.5rem;
      }
    }
  }

  .cart_details {
    width: 400px;
    float: right;

    @media screen and (max-width: 425px) {
      width: 100%;
      float: left;
    }

    h1 {
      font-size: 1.7em;
      font-weight: bold;
      margin-bottom: 1rem;

      @media screen and (max-width: 768px) {
        font-size: 1.2em;
      }
    }

    .subtotal {
      display: flex;
      padding: 0.25rem 1rem;
      font-weight: 300;
      font-size: 1.1rem;
      border: 1px solid #bdbdbd;
      border-radius: 3px 3px 0 0;

      @media screen and (max-width: 768px) {
        font-size: 1em;
      }
    }

    h4 {
      font-weight: 600;
      font-size: 1.1rem;

      @media screen and (max-width: 768px) {
        font-size: 1em;
      }
    }

    h4,
    p {
      width: 50%;
      margin: 0;
      padding: 0;
    }

    .total {
      display: flex;
      padding: 0.25rem 1rem;
      font-weight: 300;
      font-size: 1.1rem;
      border-bottom: 1px solid #bdbdbd;
      border-left: 1px solid #bdbdbd;
      border-right: 1px solid #bdbdbd;
      border-radius: 0 0 3px 3px;

      @media screen and (max-width: 768px) {
        font-size: 1em;
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
