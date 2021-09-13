import { tokenStore } from '@/common/utils/tokenStore';
import Router from 'next/router';
import { signInAPI } from './signIn.api';

export async function signIn(username: string, password: string) {
  try {
    const { jwttoken } = await signInAPI(username, password);
    tokenStore.save(jwttoken);
    Router.push('/myPage');
  } catch (error) {
    console.log(error.message);
    alert('다시 로그인해주세요!');
    Router.push('/signIn');
  }
}
