 import { useContext } from 'react';

 import {CartContext} from '../../contexts/cart.context.jsx';

 import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx'

 import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from './checkout.styles.jsx';

const Checkout = () => {
	const {cartItems, cartTotal} = useContext(CartContext)

	return (
		<CheckoutContainer>
			<CheckoutHeader>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
				{
					cartItems.map((cartItem) => {
						return (
							<CheckoutItem key={cartItem.id} cartItem={cartItem} />
					)})
				}
			<Total>Total: ${cartTotal}</Total>	
		</CheckoutContainer>
	);
}


export default Checkout; 