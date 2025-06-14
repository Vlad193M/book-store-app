import ConfirmBtn from './(auth)/components/ConfirmBtn';
import Input from './(auth)/components/Input';

export default async function Page() {
  return (
    <div className='container flex flex-col gap-8'>
      <Input
        id='email'
        name='email'
        label='Enter your email'
        placeholder='michael.joe@xmail.com'
        type='password'
      />
      <Input
        id='email'
        name='email'
        label='Enter your email'
        placeholder='michael.joe@xmail.com'
        type='email'
      />
      <ConfirmBtn className='wefnioweio'>Login</ConfirmBtn>
    </div>
  );
}
