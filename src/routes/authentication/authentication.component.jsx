import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.jsx'
import SignInForm from '../../components/sign-in-form/sign-in-form.jsx'

import {AuthContainer} from './authentication.styles.jsx'


const Authentication = () => {

	
	return (
		<AuthContainer>
			<SignInForm />
			<SignUpForm />
		</AuthContainer>

	)
}


export default Authentication;