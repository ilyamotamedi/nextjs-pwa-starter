import { ArrowCircleRightIcon } from "@heroicons/react/solid"
import Button from "../common/Button"

const AuthButton = () => {
  const user = false, // TODO
    authRoute = user ? "/api/auth/logout" : "/api/auth/login",
    authText = user ? "Sign Out" : "Sign In"

  return (
    <Button asLink href={authRoute} inverted={!!user}>
      <ArrowCircleRightIcon className="fill-current h-4 w-4" />
      <span className="flex-grow" />
      {authText}
    </Button>
  )
}

export default AuthButton
