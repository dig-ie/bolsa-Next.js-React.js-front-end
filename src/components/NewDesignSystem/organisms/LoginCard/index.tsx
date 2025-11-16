"use-client";
import { CardSurface } from "../../atoms/CardSurface";
import { LoginForm } from "../../molecules/LoginForm";

type LoginCardProps = React.ComponentPropsWithoutRef<"div">;
export function LoginCard({ className, ...props }: LoginCardProps) {
  return (
    <CardSurface className={`mx-1.5 h-[70vh] pt-14 pb-4 ${className}`}>
      <LoginForm
        onSubmit={function (email: string, password: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    </CardSurface>
  );
}
