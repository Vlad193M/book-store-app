import ConfirmBtn from "./(auth)/ConfirmBtn";
import Input from "./(auth)/Input";

export default async function Page() {
  return (
    <div className="flex flex-col gap-8">
      <Input
        id="email"
        name="email"
        label="Enter your email"
        placeholder="michael.joe@xmail.com"
        type="password"
      />
      <Input
        id="email"
        name="email"
        label="Enter your email"
        placeholder="michael.joe@xmail.com"
        type="email"
      />
      <ConfirmBtn className="wefnioweio">Login</ConfirmBtn>
    </div>
  );
}
