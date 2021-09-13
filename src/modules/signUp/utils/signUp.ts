import { tokenStore } from '@/common/utils/tokenStore';
import { signUpAPI } from './signUp.api';
import { useRouter } from 'next/router';
import { signInAPI } from '@/modules/signIn/utils/signIn.api';

interface SignUpRequest {
  username: string;
  password: string;
  nickname: string;
  email: string;
  phoneNumber: string;
}

export async function signUp(signUpRequest: SignUpRequest) {
  const { username, password, nickname, email, phoneNumber } = signUpRequest;
  try {
    await signUpAPI(username, password, nickname, email, phoneNumber);
    const { jwttoken } = await signInAPI(username, password);
    tokenStore.save(jwttoken);
  } catch (error) {
    console.log(error.message);
  }
}
