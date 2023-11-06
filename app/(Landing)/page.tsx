import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import  Link  from "next/link";

const landingPage = () => {
  return (
    <div>
      LandingPage (Unprotected)
      <div>
        <Link href="/sign-in">
        <Button>
            Login
        </Button>
        </Link>

        {/* ================================================== */}
        <Link href="/sign-up">
        <Button>
            Register
        </Button>
        </Link>

        <UserButton></UserButton>



      </div>
    </div>
  );
};

export default landingPage;
